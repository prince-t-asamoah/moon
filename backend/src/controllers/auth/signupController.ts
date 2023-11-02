import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import { SignupDTO } from '../../@types/authDTO';
import { db } from '../../prisma/client';

export default function signupUser(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body as SignupDTO;

    bcrypt.hash(password, 10, async function (err: any, hashPassword: string) {
        if (err) {
            throw err;
        }

        try {
            const newUser = await db.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password: hashPassword,
                },
            });
            if (newUser) {
                return res.status(201).json({
                    success: {
                        status: '201',
                        message: 'Account creation successful',
                    },
                });
            }
        } catch (error: any) {
            if (
                error instanceof Prisma?.PrismaClientKnownRequestError &&
                error.code === 'P2002'
                )
                return res.status(500).json({
                    error: {
                        status: '500',
                        message: 'Email already exist, try another email',
                    },
                });
        }
    });
}
