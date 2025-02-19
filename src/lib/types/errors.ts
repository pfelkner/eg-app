export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

export class NetworkError extends ApiError {
    constructor(public retry?: () => Promise<void>) {
        super(503, 'Network error occurred');
        this.name = 'NetworkError';
    }
}

export class ValidationError extends ApiError {
    constructor(public fields: Record<string, string>) {
        super(400, 'Validation failed');
        this.name = 'ValidationError';
    }
}

export class CacheError extends ApiError {
    constructor(message: string) {
        super(500, message);
        this.name = 'CacheError';
    }
} 