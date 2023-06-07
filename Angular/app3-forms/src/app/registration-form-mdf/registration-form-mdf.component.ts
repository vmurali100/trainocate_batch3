import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form-mdf',
  templateUrl: './registration-form-mdf.component.html',
  styleUrls: ['./registration-form-mdf.component.css']
})
export class RegistrationFormMdfComponent {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle the form submission here
    }
  }
}
