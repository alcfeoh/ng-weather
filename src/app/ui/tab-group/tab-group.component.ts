import {
    AfterContentInit,
    Component,
    ContentChildren,
    QueryList,
    isDevMode,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tab-group',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tab-group.component.html',
    styleUrl: './tab-group.component.css',
})
export class TabGroupComponent implements AfterContentInit {
    /**
     * The list of tabs.
     */
    @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

    /**
     * After the content has been initialized, selects the first tab that is active or the first tab if no tab is active.
     */
    ngAfterContentInit(): void {
        this.selectLastTab();
    }

    /**
     * Selects the more recently added tab.
     */
    selectLastTab() {
        if (isDevMode()) {
            setTimeout(() => {
                if (this.tabs.length > 0) this.selectTab(this.tabs.last);
            }, 500);
        } else {
            if (this.tabs.length > 0) this.selectTab(this.tabs.last);
        }
    }

    /**
     * Selects a tab and deselects all other tabs.
     */
    selectTab(tab: TabComponent) {
        this.tabs.toArray().forEach((t) => (t.active = false));
        tab.active = true;
    }

    /**
     * Closes a tab.
     */
    closeTab(event: any, tab: TabComponent) {
        event.stopPropagation();
        tab.closeRequested.emit();
        this.selectLastTab();
    }
}
