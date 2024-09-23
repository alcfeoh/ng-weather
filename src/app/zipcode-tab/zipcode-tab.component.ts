import {Component, Input} from '@angular/core';
import { Location } from '../location.type';

@Component({
  selector: 'app-zipcode-tab',
  templateUrl: './zipcode-tab.component.html',
  styleUrls: ['./zipcode-tab.component.css']
})
export class ZipcodeTabComponent {
  @Input() location: string;
  @Input() zip: string;

  constructor() {
  }

}
