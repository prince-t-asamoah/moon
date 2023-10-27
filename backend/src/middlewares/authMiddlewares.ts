import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { loginSchema, signupSchema } from '../data/authSchemaData';

function validateData(
    schema: Joi.Schema,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { error } = schema.validate(req.body);
    if (error) {
        const customErrors: Array<{ status: string; message: string }> = [];
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

export function validateSignupData(
    req: Request,
    res: Response,
    next: NextFunction
) {
    validateData(signupSchema, req, res, next);
}

export function validateLoginData(
    req: Request,
    res: Response,
    next: NextFunction
) {
    validateData(loginSchema, req, res, next);
}
