import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'My Angular LAB: Getting Started';

  getTitle() : string {
    return this.pageTitle;
  }
}
