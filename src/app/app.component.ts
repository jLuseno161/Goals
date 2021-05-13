import { Component } from '@angular/core';
import { Goal } from './goal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Goals';
  //goals:string[] = ["Wama","Anita"]
 
  //interpolation and binding
  fontColor = 'navy';
  bgColor = 'violet'
  height = '200px'
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  sayMessage() {
    alert(this.message);
  }

  message1 = 'I\'m read only!';
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message1 = 'You can edit me!';
    } else {
      this.message1 = 'I\'m read only!';
    }
  }

  writeCount(count: number) {
    console.warn(count);
  }
}
