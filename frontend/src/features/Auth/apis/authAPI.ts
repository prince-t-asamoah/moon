import { API_CLIENT } from '../../../api/config';
import { handleAPIError } from '../../../api/util';
import {
    ForgotPasswordFormData,
    LoginFormData,
    SignUpFormData,
} from '../types/authTypes';

export const loginAPI = async (data: LoginFormData) => {
    try {
        const response = await API_CLIENT.post('/auth/login', data);
        return response;
    } catch (error: any) {
        throw handleAPIError(error);
    }
};

export const signupAPI = async (data: SignUpFormData) => {
    try {
        const response = await API_CLIENT.post('/auth/signup', data);
        return response;
    } catch (error: any) {
        throw handleAPIError(error);
    }
};

export const forgotPasswordAPI = async (data: ForgotPasswordFormData) => {
    try {
        const response = await API_CLIENT.post('/auth/forgot-password', data);
        return response;
    } catch (error: any) {
        throw handleAPIError(error);
    }
};
