import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$:Observable<number>
  constructor(private store:Store<{count:number}>){
    this.count$ = store.select('count') // A CUSTOM SELECTORS NEED 
  }
  incrementCount(){
    this.store.dispatch(increment())
  }
  decrementCount(){
    this.store.dispatch(decrement())
  }
  resetCount(){
    this.store.dispatch(reset())
  }
}
