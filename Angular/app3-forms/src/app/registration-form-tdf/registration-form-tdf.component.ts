import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-registration-form-tdf',
  templateUrl: './registration-form-tdf.component.html',
  styleUrls: ['./registration-form-tdf.component.css'],
})
export class RegistrationFormTdfComponent {
  constructor(private cs: CommonService) {
    this.getUsersFromServer()
  }
  isEdit:boolean = false
  formData = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    subjects: [] as string[],
  };
  subjects: string[] = ['Math', 'Science', 'English', 'History'];
  allUsers = []
  submitForm() {
    // You can perform validation here
    // and handle the form submission as needed
    console.log(this.formData);
    // this.cs.addUserToServer(this.formData).then((res) => {
    //   res.subscribe((response) => {
    //     console.log('User Added Successfully !!' , response);
    //   });
    // });
    if(this.isEdit){
      this.updateUser();
    }else{
      this.cs.addUserToServer(this.formData).subscribe((res)=>{
        this.getUsersFromServer()
      })
    }
   
  }

  updateUser(){
    this.cs.updateUserInServer(this.formData).subscribe(res=>{
      this.getUsersFromServer();
      this.clearForm()
    })
  }

  clearForm(){
    this.formData = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
      subjects: [] as string[],
    }
  }
  handleEdit(usr:any){
    this.isEdit = true;
    this.formData = {...usr};
  }
  getUsersFromServer(){
    this.cs.getUsers().subscribe((res:any)=>{
      console.log(res)
      this.allUsers = res
    })
  }
  updateSubjects(event: any, subject: string) {
    if (event.target.checked) {
      this.formData.subjects.push(subject);
    } else {
      const index = this.formData.subjects.indexOf(subject);
      if (index !== -1) {
        this.formData.subjects.splice(index, 1);
      }
    }
  }

  handleDelete(usr:any){
    this.cs.deleteUserInServer(usr).subscribe(res=>{
      this.getUsersFromServer()
    })
  }
}
