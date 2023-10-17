import { Router } from 'express';
import bcrypt from 'bcrypt';
import { SignupDTO } from '../@types/authDTO';
import { validateSignupData } from '../middlewares/authMiddlewares';

const authRoute = Router();

authRoute.post('/signup', validateSignupData, (req, res) => {
    const { firstName, lastName, otherName, email, password } =
        req.body as SignupDTO;
    bcrypt.hash(password, 10, async function (err: any, hashPassword: string) {
        if (err) {
            return res.status(500).json({
                error: {
                    status: '500',
                    title: 'Internal server error',
                    description: 'Error while encrypting password',
                },
            });
        }
        res.status(201).json({
            success: {
                status: '201',
                title: 'Account creation successful',
                description: 'New user added successfully',
            },
            data: {
                firstName,
                lastName,
                otherName,
                email,
                password: hashPassword,
            },
        });
    });
});

export default authRoute;
