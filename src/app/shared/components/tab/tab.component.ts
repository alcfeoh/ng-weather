import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `@if (active) {
    <ng-content></ng-content>
  }`,
})
export class TabComponent {
  @Input({ required: true }) tabTitle: string;
  @Output() closeTab = new EventEmitter();

  active: boolean = false;
}
