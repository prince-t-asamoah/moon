import Joi from 'joi';
import validationMessages from './valiadtionMessages';

export const signupSchema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .required()
        .messages(validationMessages.firstName),
    lastName: Joi.string()
        .min(3)
        .required()
        .messages(validationMessages.lastName),
    email: Joi.string().email().required().messages(validationMessages.email),
    password: Joi.string()
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)/)
        .required()
        .messages(validationMessages.password),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages(validationMessages.email),
    password: Joi.string().required().messages(validationMessages.password),
});

export const forgotPasswordSchema = Joi.object({
    email: Joi.string().email().required().messages(validationMessages.email),
});
