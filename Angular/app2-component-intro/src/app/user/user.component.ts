import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() recievemessage: string = '';

  @Output() sendMessageToParent = new EventEmitter()
  welcomeMessage = "Hello Angular ... I am from Child ...";

  sendMessage(){
    this.sendMessageToParent.emit(this.welcomeMessage)
  }
}
