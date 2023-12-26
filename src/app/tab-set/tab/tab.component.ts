import { Component, computed, Input, Signal } from '@angular/core'
import { TabData } from '../model/tab.model'
import { NgIf } from '@angular/common'

@Component({
    selector: 'app-tab',
    standalone: true,
    imports: [NgIf],
    templateUrl: './tab.component.html',
    styleUrl: './tab.component.css',
})
export class TabComponent {
    protected _tabData: TabData
    @Input() set tabData(data: TabData) {
        this._tabData = data
    }

    get tabData() {
        return this._tabData
    }
    @Input() active: boolean = false
}
