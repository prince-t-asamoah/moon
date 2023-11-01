export interface SignupDTO {
    firstName: string;
    lastName: string;
    otherName: string;
    email: string;
    password: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface ForgotPasswordDTO {
    email: string;
}

export interface ResetPasswordDTO {
    password: string;
    confirmPassword: string;
}
