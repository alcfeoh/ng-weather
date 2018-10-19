import { Component } from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {interval} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(updates: SwUpdate, push: SwPush, private http: HttpClient) {
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
        console.log('Push code');
        push.requestSubscription({serverPublicKey: 'BDTrenhMvFL5hexEce8suYQkMeXajUwKG0NdZboLhFBM3tgJ6ENXCxv3CZxiGPDoc_1v6848KMJiaMwSkLUea8g'}).then(
            (success) => {
                console.log(success);
                this.http.post('http://localhost:9020/save-subscription', success).subscribe(()=> {
                    push.messages.subscribe(message => console.log(message));
                });
            },
            (error) => console.error(error)
        )
    }
}
