import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-tab',
    standalone: true,
    imports: [NgIf],
    template: `
        <div [hidden]="!active">
            <ng-content></ng-content>
        </div>
    `
})

export class TabComponent {
    @Input() title: string;
    active: boolean = false;
}
