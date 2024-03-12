import {Injectable} from '@angular/core';

type CacheValue<T> = { data: T, timestamp: number }

@Injectable()
export class WeatherCachingService<T> {
    private readonly CACHE_PREFIX: string = 'weather_cache_';
    private readonly DURATION: number = 2 * 60 * 60 * 1000

    cacheData(key: string, data: T): void {
        const cacheKey: string = this.generateCacheKey(key);
        const cacheValue: CacheValue<T> = {
            data: data,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
    }

    getData(key: string): T | null {
        const cacheKey = this.generateCacheKey(key);
        const cachedItem = localStorage.getItem(cacheKey);
        if (cachedItem) {
            const cacheValue: CacheValue<T> = JSON.parse(cachedItem);
            const currentTime: number = new Date().getTime();
            const expirationTime: number = cacheValue.timestamp + this.DURATION;
            if (currentTime < expirationTime) {
                return cacheValue.data;
            } else {
                localStorage.removeItem(cacheKey);
            }
        }
        return null;
    }

    removeLocation(key: string): void {
        const cacheKey = this.generateCacheKey(key);
        localStorage.removeItem(cacheKey)
    }

    private generateCacheKey(key: string): string {
        return this.CACHE_PREFIX + key;
    }
}
