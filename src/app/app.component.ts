import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Define a superbowl property to hold our superbowls data
  superbowls: Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getSuperbowls() method we defined
    this._dataService.getSuperbowls()
        .subscribe(res => this.superbowls = res);
    
    this._dataService.getOneSuperbowl()
      .subscribe(res => this.superbowls = res);
    
  }
}
