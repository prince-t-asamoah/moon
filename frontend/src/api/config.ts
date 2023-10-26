import axios, { AxiosInstance } from 'axios';
import { AuthUser } from '../features/Auth/types/authTypes';

function createAxiosInstance(headers: object): AxiosInstance {
    const baseURL = import.meta.env.VITE_APP_BASEURL;

    const instance = axios.create({
        baseURL,
        headers,
        responseType: 'json',
    });

    instance.interceptors.request.use((config) => {
        const auth: AuthUser = JSON.parse(sessionStorage.getItem('auth') ?? "{}");
        if (auth) {
            config.headers.Authorization = `Bearer ${auth.token}`;
        }
        return config;
    });
    return instance;
}

const API_CLIENT: AxiosInstance = createAxiosInstance({
    'Content-Type': 'application/json',
    Accept: 'application/json',
});

export { API_CLIENT };
