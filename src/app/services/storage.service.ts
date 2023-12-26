import { Injectable } from '@angular/core'

@Injectable()
export class StorageService {
    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getItem(key: string): any {
        return localStorage.getItem(key)
    }

    removeItem(key: string): void {
        localStorage.removeItem(key)
    }

    clearItems(): void {
        localStorage.clear()
    }
}
