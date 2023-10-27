import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format'),
    password: yup
        .string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)/,
            'Password must contain at least one letter and one number'
        )
        .min(8, 'Password must be at least 8 characters long'),
});

export const signupSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    password: yup
        .string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)/,
            'Password must contain at least one letter and one number'
        )
        .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format'),
});

export const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    password: yup
        .string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)/,
            'Password must contain at least one letter and one number'
        )
        .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format'),
});
