import api from './client';
import { DashboardMetrics, Insight } from '@/types';

export const analyticsApi = {
    getDashboard: async (): Promise<DashboardMetrics> => {
        const response = await api.get('/api/analytics/dashboard');
        return response.data;
    },

    getTaskTrend: async () => {
        const response = await api.get('/api/analytics/tasks-trend');
        return response.data;
    },

    getFeedbackTrend: async () => {
        const response = await api.get('/api/analytics/feedback-trend');
        return response.data;
    },

    getInsights: async (): Promise<{ insights: Insight[] }> => {
        const response = await api.get('/api/analytics/insights');
        return response.data;
    },
};
