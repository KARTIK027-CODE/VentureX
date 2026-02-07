import api from './client';
import { Pitch } from '@/types';

export const pitchApi = {
    generate: async (): Promise<Pitch> => {
        const response = await api.get('/api/pitch/generate');
        return response.data;
    },
};
