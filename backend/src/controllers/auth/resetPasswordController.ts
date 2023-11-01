import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ResetPasswordDTO } from '../../@types/authDTO';
import { db } from '../../prisma/client';

interface DecodedJsonToken {
    email: string;
}

export function verifyResetPasswordToken(req: Request, res: Response) {
    const { token } = req.query as { token: string };
    const secret = process.env.JWT_SECRET ?? '';

    jwt.verify(token, secret, function (err) {
        if (err)
            return res
                .status(400)
                .send(
                    '<p style="text-align:center">Sorry, the link is invalid or expired. Try resetting your password again.</p>'
                );
        return res.redirect(
            `http://localhost:5173/reset-password?token=${token}`
        );
    });
}

export function resetUserPassword(req: Request, res: Response) {
    const { password, confirmPassword } = req.body as ResetPasswordDTO;
    const token = req.headers.authorization?.split(' ')[1] ?? '';
    const secret = process.env.JWT_SECRET ?? '';

    jwt.verify(token, secret, function (err, decoded) {
        if (err)
            return res.status(401).json({
                error: {
                    status: '401',
                    message:
                        'Token invalid or expired, try resetting password again',
                },
            });
        const { email } = decoded as DecodedJsonToken;
        if (password !== confirmPassword) {
            return res.status(400).json({
                error: {
                    status: '400',
                    message: 'Passwords must be the same',
                },
            });
        }
        bcrypt.hash(password, 10, async function (err, hashPassword) {
            if (err) throw err;
            const updatedUserPassword = await db.user.update({
                where: { email },
                data: { password: hashPassword },
            });
            if (updatedUserPassword) {
                return res.status(200).json({
                    success: {
                        status: '200',
                        message: 'Password reset successful',
                    },
                });
            }
        });
    });
}
