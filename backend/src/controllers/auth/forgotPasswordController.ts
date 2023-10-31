import { Request, Response } from 'express';
import { ForgotPasswordDTO } from '../../@types/authDTO';
import { db } from '../../prisma/client';

export default async function forgotPassword(req: Request, res: Response) {
    const { email } = req.body as ForgotPasswordDTO;
    const isUserValid = await db.user.findUnique({ where: { email } });
    if (!isUserValid)
        return res.status(400).json({
            error: { status: '400', message: 'User does not exist' },
        });
}
