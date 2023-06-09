import { Component, ViewChild } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  // @ViewChild(UserComponent,{static:false}) userComp:UserComponent
  @ViewChild(UserComponent, { static: false }) userComponent: UserComponent;
  constructor(){
    console.log(this.userComponent)
  }
  ngAfterViewInit(){
    console.log(this.userComponent)
  }
  changeTextInUserComp(){
    this.userComponent.helloFromUser = "Hello .. I will be Changed from parent !!!"
    this.userComponent.getDataFromServer()
  }
}
