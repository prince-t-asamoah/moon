import { AuthUser } from '../features/Auth/types/authTypes';

export const getAuth = () => {
    const authString: string | null = sessionStorage.getItem('auth');
    if (authString === null) {
        return null;
    }
    const auth: AuthUser = JSON.parse(authString);
    return auth;
};
