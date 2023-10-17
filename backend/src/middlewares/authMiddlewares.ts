import { NextFunction, Request, Response } from 'express';
import { signupSchema } from '../data/authSchemaData';

export function validateSignupData(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        const customErrors: Array<{ status: string; message: string }> = [];
        error.details.forEach((detail) => {
            customErrors.push({ status: '400', message: detail.message });
        });
        return res.status(400).json({
            errors: customErrors,
        });
    } else {
        next();
    }
}
