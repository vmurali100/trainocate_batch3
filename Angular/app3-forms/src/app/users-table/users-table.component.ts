import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  @Input() usersDetails: any = [];
  @Output() editUser = new EventEmitter();
  @Output() deleteUser = new EventEmitter();
  @Input() dynamicTableFields = []
  editUserDetails(usr:any,i:number){
    usr['index'] = i
    this.editUser.emit(usr)
  }

  deleteUserDetails(usr:any){
    this.deleteUser.emit(usr)
  }
  // users = [
  //   "Ram",
  //   "Ravi",
  //   "Sam",
  //   "Sundar",
  //   "Kiran",
  //   "Kumar"
  // ]

  // myPerson ={
  //   fname:"Ram",
  //   lname:"krtishn",
  //   email:"ram@gmail.com",
  //   mobile:99999,
  //   age :40,
  //   city:"Bangalore"
  // }

  // converObjectInToArray (person:any){
  //   return Object.values(person)
  // }
}
