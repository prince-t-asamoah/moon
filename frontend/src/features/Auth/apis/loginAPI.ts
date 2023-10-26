import { API_CLIENT } from '../../../api/config';
import { handleAPIError } from '../../../api/util';

export const loginAPI = async (data: { email: string; password: string }) => {
    try {
        const response = await API_CLIENT.post('/auth/login', data);
        return response;
    } catch (error: any) {
        throw handleAPIError(error);
    }
};
