import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  @ViewChildren('myChild') childElements:QueryList<ElementRef>

  logChildElements(){
    this.childElements.forEach((element)=>{
      console.log(element)
    })
  }
}
