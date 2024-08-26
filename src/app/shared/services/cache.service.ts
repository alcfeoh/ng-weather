import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  setItem<T>(key: string, data: T, expirationInSeconds: number): void {
    const expirationDate = new Date().getTime() + expirationInSeconds * 1000;
    const cacheItem = {
      data: data,
      expirationDate: expirationDate,
    };
    localStorage.setItem(key, JSON.stringify(cacheItem));
  }

  getItem<T>(key: string): T | null {
    const cacheItem = localStorage.getItem(key);
    if (!cacheItem) {
      return null;
    }

    const parsedItem = JSON.parse(cacheItem);
    const currentTime = new Date().getTime();

    // If the item is expired, delete it and return null
    if (currentTime > parsedItem.expirationDate) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedItem.data as T;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
