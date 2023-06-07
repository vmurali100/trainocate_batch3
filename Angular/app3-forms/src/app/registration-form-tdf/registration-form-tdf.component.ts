import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form-tdf',
  templateUrl: './registration-form-tdf.component.html',
  styleUrls: ['./registration-form-tdf.component.css']
})
export class RegistrationFormTdfComponent {
  formData = {
    fname: 'abcd',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    subjects: [] as string[]
  };
  subjects: string[] = ['Math', 'Science', 'English', 'History'];

  submitForm() {
    // You can perform validation here
    // and handle the form submission as needed
    console.log(this.formData);
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
}
