import { Injectable } from '@angular/core';

@Injectable()
export class CacheStorageService {
  private cache = {};
  private cacheDuration = 120000;//7200000;
  private cacheKey = 'cacheStorage';

  constructor() {
    this.loadCache();
  }

  private loadCache() {
    let cache = localStorage.getItem(this.cacheKey);
    if (cache) {
      this.cache = JSON.parse(cache);
    }
  }

  private saveCache() {
    localStorage.setItem(this.cacheKey, JSON.stringify(this.cache));
  }

  setCache(key: string, value: any) {
    this.cache[key] = {
      value: value,
      expiration: Date.now() + this.cacheDuration
    };
    this.saveCache();
  }

  getCache(key: string) {
    let cache = this.cache[key];
    if (cache && cache.expiration > Date.now()) {
      return cache.value;
    }
    return null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
