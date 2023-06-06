import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  
  user ={
    fname:"",
    lname:"",
    index:0
  }
  isEdit=false;
  
  allUsers: any = [];
  addUser(userForm: NgForm) {
    console.log(userForm.value);
    this.allUsers.push({ ...userForm.value });
    this.clearForm()
  }
 
  clearForm(){
    this.user={
      fname:"",
      lname:"",
      index:0
    }
  }

  handleEdit(usr:any){
    console.log(usr)
    this.user = {...usr};
    this.isEdit = true;
  }
  handleDelete(){}
  handleUpdate(){
    this.allUsers[this.user['index']]= this.user
    this.clearForm()
  }
}
