import { Injectable } from '@angular/core';
import { CONFIG } from './config';

@Injectable()
export class CacheStorageService {
  private cache = {};
  private cacheKey = 'cacheStorage';

  constructor() {
    this.initializeCache();
  }

  // initialize cache from local storage
  private initializeCache() {
    let cache = localStorage.getItem(this.cacheKey);
    if (cache) {
      this.cache = JSON.parse(cache);
    }
  }

  private saveCache() {
    //save cache to local storage
    localStorage.setItem(this.cacheKey, JSON.stringify(this.cache));
  }

  setCache<T>(key: string, value: T) {
    //set cache value and expiration to cache duration
    this.cache[key] = {
      value: value,
      expiration: Date.now() + CONFIG.cacheDuration
    };
    this.saveCache();
  }

  getCache(key: string) {
    let cache = this.cache[key];
    //check if cache exists and has not expired. if so, return cached value
    if (cache && cache.expiration > Date.now()) {
      return cache.value;
    }
    return null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
