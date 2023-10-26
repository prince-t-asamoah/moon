import axios, { AxiosInstance } from 'axios';
import { getAuth } from '../util/getAuth';

function createAxiosInstance(headers: object): AxiosInstance {
    const baseURL = import.meta.env.VITE_APP_BASEURL;

    const instance = axios.create({
        baseURL,
        headers,
        responseType: 'json',
    });

    instance.interceptors.request.use((config) => {
        const auth = getAuth();
        if (auth) {
            config.headers.Authorization = `Bearer ${auth.token}`;
        }
        return config;
    });
    return instance;
}

export const API_CLIENT: AxiosInstance = createAxiosInstance({
    'Content-Type': 'application/json',
    Accept: 'application/json',
});