import api from './client';
import { User } from '@/types';

export const authApi = {
    signup: async (data: {
        name: string;
        email: string;
        password: string;
        role?: 'founder' | 'team_member';
    }) => {
        const response = await api.post('/api/auth/signup', data);
        return response.data;
    },

    login: async (data: { email: string; password: string }) => {
        const response = await api.post('/api/auth/login', data);
        return response.data;
    },

    getMe: async (): Promise<User> => {
        const response = await api.get('/api/auth/me');
        return response.data;
    },
};
