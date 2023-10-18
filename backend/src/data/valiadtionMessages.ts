export default {
    firstName: {
        'string.base': 'First name should be a string',
        'string.min': 'First name should be at least {#limit} characters long',
        'any.required': 'First name is required',
    },
    lastName: {
        'string.base': 'Last name should be a string',
        'string.min': 'Last name should be at least {#limit} characters long',
        'any.required': 'Last name is required',
    },
    email: {
        'string.base': 'Email should be a string',
        'string.email': 'Invalid email format',
        'any.required': 'Email is required',
    },
    password: {
        'string.base': 'Password should be a string',
        'string.pattern.base':
            'Password must contain at least one letter and one number',
        'any.required': 'Password is required',
    },
};
