import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-md-user',
  templateUrl: './md-user.component.html',
  styleUrls: ['./md-user.component.css'],
})
export class MdUserComponent {
  allUsers:any = []
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fname: ['',[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z]+$/)]],
      lname: ['',[Validators.required,Validators.minLength(4)]],
      index:0
    });
  }

  isEdit = false;
  addUser() {

    console.log(this.userForm)
    this.allUsers.push({...this.userForm.value})
    this.userForm.reset()
  }
  handleUpdate() {
    this.allUsers [this.userForm.value.index] = this.userForm.value;
    this.userForm.reset()
  }

  handleEdit(user:any){
    this.isEdit = true
    this.userForm.setValue(user)
  }

  handleDelete(usr:any){
    this.allUsers = this.allUsers.filter((us:any)=>us.fname !== usr.fname)
  }
}
