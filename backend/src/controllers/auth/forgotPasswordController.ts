import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ForgotPasswordDTO } from '../../@types/authDTO';
import { db } from '../../prisma/client';

interface EmailTransporterConfig extends SMTPTransport.Options {
    host: string;
}

export default async function forgotPassword(req: Request, res: Response) {
    const { email } = req.body as ForgotPasswordDTO;
    const isUserValid = await db.user.findUnique({ where: { email } });
    if (!isUserValid)
        return res.status(400).json({
            error: { status: '400', message: 'User does not exist' },
        });

    const secretKey = process.env.JWT_SECRET ?? '';
    const resetToken = jwt.sign({ email }, secretKey, { expiresIn: '15m' });
    const resetLink = `${process.env.FRONTEND_BASE_URL}/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
        name: 'moon-app',
        service: process.env.EMAIL_SERVICE,
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    } as EmailTransporterConfig);
    const emailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'MoonTask Password Reset',
        html: `
        <html>
        <body>
            <p>Click this link to reset your password: <a href="${resetLink}">${resetLink}</a></p>
        </body>
        </html>`,
    };
    transporter.sendMail(emailOptions, (err) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send({
                success: {
                    status: '200',
                    message: 'Reset link successfully sent to email',
                },
            });
        }
    });
}
