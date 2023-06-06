import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent {
  msgFromCompaA =""
  constructor(private cs:CommonService){
    this.cs.exchangeMessage.subscribe(res=>{
      console.log(res)
      this.msgFromCompaA = res
    })
  }

}
