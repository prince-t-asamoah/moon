import { Router } from 'express';
import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { LoginDTO, SignupDTO } from '../@types/authDTO';
import {
    validateLoginData,
    validateSignupData,
} from '../middlewares/authMiddlewares';
import { db } from '../prisma/client';

const authRoute = Router();

authRoute.post('/signup', validateSignupData, (req, res) => {
    const { firstName, lastName, email, password } = req.body as SignupDTO;

    bcrypt.hash(password, 10, async function (err: any, hashPassword: string) {
        if (err) {
            return res.status(500).json({
                errors: [
                    {
                        status: '500',
                        message: 'Internal server error',
                    },
                ],
            });
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
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
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
});

authRoute.post('/login', validateLoginData, async (req, res) => {
    const { email, password } = req.body as LoginDTO;
    const jwtSecret = process.env.JWT_SECRET ?? '';

    try {
        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({
                errors: [{ status: '400', message: 'Invalid credentials' }],
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                errors: [{ status: '400', message: 'Invalid credentials' }],
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
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: { status: '500', message: 'Interal server error' },
        });
    }
});

export default authRoute;
