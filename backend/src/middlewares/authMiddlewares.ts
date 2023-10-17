import { NextFunction, Request, Response } from 'express';
import { signupSchema } from '../data/authSchemaData';

export async function validateSignupData(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { error } = await signupSchema.validate(req.body);
    if (error) {
        const customErrors: any = [];
        error.details.forEach((detail) => {
            customErrors.push({ status: '400', message: detail.message });
        });
        return res.status(400).json({
            error: customErrors,
        });
    } else {
        next();
    }
}
