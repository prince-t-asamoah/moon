import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { LoginDTO } from '../../@types/authDTO';
import { db } from '../../prisma/client';

export default async function loginUser(req: Request, res: Response) {
    const { email, password } = req.body as LoginDTO;
    const jwtSecret = process.env.JWT_SECRET ?? '';

    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
        return res.status(400).json({
            error: { status: '400', message: 'Invalid credentials' },
        });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({
            error: { status: '400', message: 'Invalid credentials' },
        });
    }
    const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: '1h',
    });

    return res.status(200).json({
        user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            otherName: user.otherName,
            profileImageUrl: user.profileImageUrl,
        },
        token,
    });
}
