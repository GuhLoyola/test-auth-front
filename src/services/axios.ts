import axios from "axios";
import { parseCookies } from "nookies";

const api_url = 'http://localhost:3000'

export const instance = axios.create({
    baseURL: api_url
})

export const authInstance = axios.create({
    baseURL: api_url
})

authInstance.interceptors.request.use(
    async (config) => {
        const cookies = parseCookies();

        const token = JSON.parse(cookies.token);

        if(token.access_token) {
            config.headers.Authorization = `Bearer ${token.access_token}`
        }

        return config
    },
    (error) => { return Promise.reject(error) }
);

export const setupresponseInterceptor = (signOut: any) => {
    authInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response !== undefined && error.response.status === 401) {
                signOut();
            } else {
                return Promise.reject(error)
            }
        }
    );
};

