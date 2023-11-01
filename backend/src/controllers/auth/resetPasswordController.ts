import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

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
