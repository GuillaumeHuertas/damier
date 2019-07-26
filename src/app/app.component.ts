import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Le Damier';

  lignes = Array(8);
  colones = Array(8);

  statusBW = true;

  bandw() {
    this.statusBW = this.statusBW == false ? true : false; 

    //if (this.statusBW == false) {
    //  this.statusBW = true;
    //} else {
    //  this.statusBW = false;
    //}
    
  }
}