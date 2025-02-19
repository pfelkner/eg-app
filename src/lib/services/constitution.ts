import type { ConstitutionParagraph } from '$lib/types';
import { constitutionData } from '$lib/data/constitution-data';

// Simulated API response type
export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Simulated API error
export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulated API endpoints
export const constitutionApi = {
    async getConstitution(): Promise<ApiResponse<ConstitutionParagraph[]>> {
        await delay(500 + Math.random() * 1000);
        if (Math.random() < 0.1) {
            throw new ApiError(500, 'Failed to fetch constitution data');
        }
        return {
            data: constitutionData,
            status: 200,
            message: 'Success'
        };
    },

    async getArticle(id: number): Promise<ApiResponse<ConstitutionParagraph>> {
        await delay(300 + Math.random() * 700);
        const article = constitutionData[id - 1];
        if (!article) {
            throw new ApiError(404, `Article ${id} not found`);
        }
        return {
            data: article,
            status: 200,
            message: 'Success'
        };
    }
}; 