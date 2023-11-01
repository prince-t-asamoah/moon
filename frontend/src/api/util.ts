import { AxiosError } from 'axios';

export const handleAPIError = (
    error: AxiosError<{ error: { status: string; message: string } }>
) => {
    if (error.response) {
        return error.response.data.error;
    } else {
        return error;
    }
};
