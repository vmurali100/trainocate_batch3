import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { MdUserComponent } from './md-user/md-user.component';
import { RegistrationFormTdfComponent } from './registration-form-tdf/registration-form-tdf.component';
import { RegistrationFormMdfComponent } from './registration-form-mdf/registration-form-mdf.component';
import { WeatheDetailsComponent } from './weathe-details/weathe-details.component';
import { CommonInterceptor } from './common.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersTableComponent,
    MdUserComponent,
    RegistrationFormTdfComponent,
    RegistrationFormMdfComponent,
    WeatheDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
