import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadStudents } from '../student.actions';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students$:Observable<any>;
  constructor(private store:Store<any>){
    this.students$ = this.store.select((state)=>{
      return state
    })
  }
  ngOnInit(){
    // this.store.dispatch(loadStudents())
  }
}
