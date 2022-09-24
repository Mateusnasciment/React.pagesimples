import Axios from 'axios';

const api = Axios.create({
    baseURL: process.env.REACT_APP_API_URL
});
export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate-token', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response
    }

}); 