import { Component } from '@angular/core'
import { LocationService } from '../services/location.service'

@Component({
    selector: 'app-zipcode-entry',
    templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
    constructor(private service: LocationService) {}

    public addLocation(zipcode: string): void {
        if (zipcode?.length === 5) this.service.addLocation(zipcode)
    }
}
