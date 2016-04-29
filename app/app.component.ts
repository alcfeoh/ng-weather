import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron">
          <div class="form-group">
            <label for="zipcode">Enter your zip code</label>
            <input type="text" class="form-control" #zipcode placeholder="Zipcode">
          </div>
            <button class="btn-sm btn-success" type="submit" (click)="addLocation(zipcode.value)">
              Add location <span class="glyphicon glyphicon-plus"></span>
            </button>
        </div>
        <div class="row marketing" *ngFor="#location of locations">
          <h4>{{location}}</h4>
          <p>My weather data</p>
        </div>

    `
})
export class AppComponent {

    locations : Array = [];

    addLocation(location){
        this.locations.push(location);
    }

}