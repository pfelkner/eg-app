import { ApiError, NetworkError, ValidationError } from '$lib/types/errors';
import type { ApiResponse } from './constitution';

export abstract class BaseService<T> {
    protected abstract endpoint: string;
    
    protected async request<R>(
        method: string, 
        path: string, 
        data?: any,
        options: {
            retries?: number;
            useCache?: boolean;
            cacheTTL?: number;
        } = {}
    ): Promise<ApiResponse<R>> {
        const url = `${this.endpoint}${path}`;
        
        try {
            // Simulate API call with our delay function
            await this.delay(500 + Math.random() * 1000);
            
            // Simulate random network error (5% chance)
            if (Math.random() < 0.05) {
                throw new NetworkError();
            }
            
            // Simulate validation error (5% chance)
            if (Math.random() < 0.05) {
                throw new ValidationError({
                    field: 'Invalid input'
                });
            }
            
            return {
                data: data as R,
                status: 200,
                message: 'Success'
            };
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(500, 'An unexpected error occurred');
        }
    }
    
    protected delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
} 