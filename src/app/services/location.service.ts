import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { StorageService } from './storage.service'

export const LOCATIONS: string = 'locations'

@Injectable()
export class LocationService {
    public _locations: BehaviorSubject<string[]>

    constructor(private storageService: StorageService) {
        const locString: string = storageService.getItem(LOCATIONS)
        if (locString) {
            this._locations = new BehaviorSubject<string[]>(
                JSON.parse(locString)
            )
        }
    }

    public addLocation(zipcode: string): void {
        this._locations.next(this._locations.value.concat(zipcode))
        this.storageService.setItem(LOCATIONS, this._locations.value)
    }

    public removeLocation(zipcode: string): void {
        this._locations.next(
            this._locations.value.filter((value) => value !== zipcode)
        )
        this.storageService.setItem(LOCATIONS, this._locations.value)
    }

    get locations$(): Observable<string[]> {
        return this._locations.asObservable()
    }
}
