import { Component, Input, inject } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-zipcode-tab',
  templateUrl: './zipcode-tab.component.html',
  styleUrls: ['./zipcode-tab.component.css']
})
export class ZipcodeTabComponent {
  @Input() location: string;
  @Input() zip: string;
  private tabService = inject(TabService);

  selectTab(zip: string) {
    this.tabService.selectTab(zip);
  }

  removeLocation(zip: string) {
    //emit to remove the location in the parent component?
  }
}

