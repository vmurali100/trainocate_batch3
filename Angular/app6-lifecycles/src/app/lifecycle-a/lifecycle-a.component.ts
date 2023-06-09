import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-a',
  templateUrl: './lifecycle-a.component.html',
  styleUrls: ['./lifecycle-a.component.css'],
})
export class LifecycleAComponent {
  count: number = 0;
  isShowCount :boolean = true
  constructor() {
   
  }

  incrementCount() {
    this.count++;
    // setInterval(() => {
    //   // this.count = this.count+1;
    //   this.count++;
    // }, 5000);
  }
  //Mounting Phase

  ngOnChanges() {
    console.log('ngOnChanges Initialized !!');
  }
  ngOnInit() {
    // this.incrementCount();
    console.log('ngOnInit Initialized !!');
  }
 
  //Updating Phase

  //Un Mounting Phase

  hideCount(){
    this.isShowCount = false
  }
}
