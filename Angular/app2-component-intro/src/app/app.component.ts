import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = "Murali Krishna !!"
  title = 'app2-component-intro';
  msgFromChild = ""
  receiveMessage(message:string){
    this.msgFromChild = message
  }
}
