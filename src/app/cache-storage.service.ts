import { Injectable } from '@angular/core';

@Injectable()
export class CacheStorageService {
  private cache = {};
  private cacheDuration = 120000;//7200000;//2 hours
  private cacheKey = 'cacheStorage';

  constructor() {
    this.loadCache();
  }

  private loadCache() {
    //load cache from local storage
    let cache = localStorage.getItem(this.cacheKey);
    if (cache) {
      this.cache = JSON.parse(cache);
    }
  }

  private saveCache() {
    //save cache to local storage
    localStorage.setItem(this.cacheKey, JSON.stringify(this.cache));
  }

  setCache(key: string, value: any) {
    //set cache value and expiration to cache duration
    this.cache[key] = {
      value: value,
      expiration: Date.now() + this.cacheDuration
    };
    this.saveCache();
  }

  getCache(key: string) {
    let cache = this.cache[key];
    //check if cache exists and has not expired
    if (cache && cache.expiration > Date.now()) {
      return cache.value;
    }
    return null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
