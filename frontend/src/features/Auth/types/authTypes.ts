export interface AuthUser {
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        otherName: string | null;
        profileImageUrl: string | null;
    };
    token: string;
}

export interface SignUpFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface ForgotPasswordFormData {
    email: string;
}

export interface ResetPasswordFormData {
    password: string;
    confirmPassword: string;
}
