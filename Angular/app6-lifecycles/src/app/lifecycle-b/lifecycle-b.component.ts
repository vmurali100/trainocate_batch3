import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-b',
  templateUrl: './lifecycle-b.component.html',
  styleUrls: ['./lifecycle-b.component.css'],
})
export class LifecycleBComponent {
  @Input() myCount:number = 0;

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges Triggered !!",changes)
  }
  ngOnInit(){
    console.log("ngOnInit Triggered !!")
  }
  ngDoCheck(){
    console.log("ngDoCheck Triggered !!")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit Triggered !!!")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Triggered !!!")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Triggered !!!")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit Triggered !!")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy Triggered !!")
    alert("Component B is removed ... Tata Bye ")
  }
  
 
}
