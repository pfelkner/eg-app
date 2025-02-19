type CacheEntry<T> = {
    data: T;
    timestamp: number;
};

const cache = new Map<string, CacheEntry<any>>();

export const withRetry = async <T>(
    fn: () => Promise<T>,
    options = {
        maxRetries: 3,
        initialDelay: 1000,
        maxDelay: 5000,
        backoff: 2
    }
): Promise<T> => {
    let lastError: Error = new Error('Unknown error');
    let delay = options.initialDelay;

    for (let attempt = 0; attempt <= options.maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;
            
            if (attempt === options.maxRetries) {
                break;
            }

            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, delay));
            
            // Exponential backoff
            delay = Math.min(delay * options.backoff, options.maxDelay);
        }
    }

    throw lastError;
};

export const withCache = async <T>(
    key: string,
    fn: () => Promise<T>,
    options = {
        ttl: 5 * 60 * 1000, // 5 minutes default TTL
        staleWhileRevalidate: true
    }
): Promise<T> => {
    const now = Date.now();
    const cached = cache.get(key);

    // If we have a valid cache entry, return it
    if (cached && now - cached.timestamp < options.ttl) {
        return cached.data;
    }

    // If we're allowing stale data and have a cache entry, return it and revalidate
    if (options.staleWhileRevalidate && cached) {
        // Revalidate in background
        fn().then(newData => {
            cache.set(key, {
                data: newData,
                timestamp: Date.now()
            });
        }).catch(console.error);

        return cached.data;
    }

    // Otherwise, fetch new data
    const data = await fn();
    
    cache.set(key, {
        data,
        timestamp: now
    });

    return data;
};

// Helper to clear cache
export const clearCache = (key?: string) => {
    if (key) {
        cache.delete(key);
    } else {
        cache.clear();
    }
};

// Helper to get cache size
export const getCacheSize = () => cache.size;

// Helper to get cache keys
export const getCacheKeys = () => Array.from(cache.keys()); 