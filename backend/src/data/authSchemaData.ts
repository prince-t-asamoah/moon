import Joi from "joi";

export const signupSchema = Joi.object({
    firstName: Joi.string().min(3).required().messages({
        'string.base': 'First name should be a string',
        'string.min':
            'First name should be at least {#limit} characters long',
        'any.required': 'First name is required',
    }),
    lastName: Joi.string().min(3).required().messages({
        'string.base': 'Last name should be a string',
        'string.min':
            'Last name should be at least {#limit} characters long',
        'any.required': 'Last name is required',
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be a string',
        'string.email': 'Invalid email format',
        'any.required': 'Email is required',
    }),
    password: Joi.string()
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)/)
        .required()
        .messages({
            'string.base': 'Password should be a string',
            'string.pattern.base':
                'Password must contain at least one letter and one number',
            'any.required': 'Password is required',
        }),
});
