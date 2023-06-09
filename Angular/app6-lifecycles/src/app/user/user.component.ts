import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  helloFromUser:string = "Hello I am from User Component !!"
 
  getDataFromServer(){
    console.log("getDataFromServer called !!!")
  }
}
