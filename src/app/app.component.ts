import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'Title change in 2 seconds';
    // }, 2000);
  }
}
