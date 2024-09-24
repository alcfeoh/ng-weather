import { Injectable, Signal, signal } from '@angular/core';

@Injectable()
export class TabService {
  private selectedTabSignal = signal<string>('');
  selectedTab: Signal<string> = this.selectedTabSignal.asReadonly();

  constructor() {}

  selectTab(zipcode: string) {
    this.selectedTabSignal.update(() => zipcode);
  }
}
