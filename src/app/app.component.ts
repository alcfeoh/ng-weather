import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(updates: SwUpdate) {
        interval(10000).subscribe(() => updates.checkForUpdate());

        updates.available.subscribe(event => {
            if (prompt('Update available for this app. Do you want to update it?')) {
                updates.activateUpdate().then(() => document.location.reload());
            }
        });
        updates.activated.subscribe(event => {
            console.log('old version was', event.previous);
            console.log('new version is', event.current);
        });
    }
}
