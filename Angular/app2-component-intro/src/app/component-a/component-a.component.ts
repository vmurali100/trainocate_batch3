import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {
  message:string="Welcome to Isolated Component Communication !!!";

  constructor(private cs:CommonService){

  }

  sendMessageFromCompA(){
    this.cs.receiveAndSendMessage(this.message)
  }
}
