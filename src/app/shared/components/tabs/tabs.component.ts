import {
  AfterContentChecked,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent implements AfterContentChecked {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentChecked() {
    if (
      this.tabs.toArray().length > 0 &&
      !this.tabs.toArray().some((tab) => tab.active)
    ) {
      setTimeout(() => {
        this.selectTab(this.tabs.first);
      });
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => (tab.active = false));
    tab.active = true;
  }

  removeTab(tab: TabComponent) {
    tab.closeTab.emit();
    this.selectTab(this.tabs.first);
  }
}
