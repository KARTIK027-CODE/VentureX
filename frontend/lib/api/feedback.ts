import api from './client';
import { Feedback } from '@/types';

export const feedbackApi = {
    submit: async (data: {
        type: 'internal' | 'external';
        source?: string;
        feedbackText: string;
        rating?: number;
        category?: 'idea' | 'execution' | 'product' | 'market';
        submittedByName?: string;
    }): Promise<Feedback> => {
        const response = await api.post('/api/feedback/submit', data);
        return response.data;
    },

    getAll: async (filters?: {
        type?: string;
        category?: string;
    }): Promise<Feedback[]> => {
        const response = await api.get('/api/feedback/all', { params: filters });
        return response.data;
    },

    getStats: async () => {
        const response = await api.get('/api/feedback/stats');
        return response.data;
    },
};
