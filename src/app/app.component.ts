import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Northwind web';

  _displayLogin = false;

  get displayMenu(){
    return this._displayLogin;
  }
}
