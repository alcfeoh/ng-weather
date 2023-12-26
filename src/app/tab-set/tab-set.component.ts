import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Output,
    QueryList,
} from '@angular/core'
import { TabComponent } from './tab/tab.component'
import { NgClass, NgForOf, NgIf } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-tab-set',
    standalone: true,
    imports: [NgClass, NgForOf, RouterLink, NgIf],
    templateUrl: './tab-set.component.html',
})
export class TabSetComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>

    @Output() removeTab: EventEmitter<string> = new EventEmitter<string>()

    ngAfterContentInit(): void {
        this.tabs.changes.subscribe(() => {
            this.resetActiveTab()
            this.tabs.last.active = true
        })
    }

    public removeTabUpdateActiveTab(index: number): void {
        this.removeTab.emit(this.tabs.get(index).tabData.id)
        this.setActiveTab()
    }

    public setActiveTab(index?: number): void {
        this.resetActiveTab()
        if (index !== null && index !== undefined && index > -1) {
            this.tabs.get(index).active = true
        } else {
            this.tabs.first.active = true
        }
    }

    private resetActiveTab(): void {
        for (let tab of this.tabs) {
            tab.active = false
        }
    }
}
