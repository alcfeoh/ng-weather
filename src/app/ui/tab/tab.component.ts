import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tab',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tab.component.html',
    styleUrl: './tab.component.css',
})
export class TabComponent {
    /**
     * The title of the tab.
     */
    @Input() title: string;

    /**
     * Whether the tab is active.
     */
    @Input() active: boolean;

    /**
     * Emit an event when the tab is closed.
     */
    @Output() closeRequested = new EventEmitter<void>();
}
