import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { MdUserComponent } from './md-user/md-user.component';
import { RegistrationFormTdfComponent } from './registration-form-tdf/registration-form-tdf.component';
import { RegistrationFormMdfComponent } from './registration-form-mdf/registration-form-mdf.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersTableComponent,
    MdUserComponent,
    RegistrationFormTdfComponent,
    RegistrationFormMdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
