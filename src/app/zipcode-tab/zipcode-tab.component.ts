import { Component, Input, inject } from '@angular/core';
import { TabService } from '../tab.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-zipcode-tab',
  templateUrl: './zipcode-tab.component.html',
  styleUrls: ['./zipcode-tab.component.css']
})
export class ZipcodeTabComponent {
  @Input() location: string;
  @Input() zip: string;
  private tabService = inject(TabService);
  protected locationService = inject(LocationService);

  selectTab(zip: string) {
    this.tabService.selectTab(zip);
    //TODO: set active tab style
  }

  removeLocation(zip: string) {
    console.log('removing location', zip);
    this.locationService.removeLocation(zip);
  }
}

