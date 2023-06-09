import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleAComponent } from './lifecycle-a/lifecycle-a.component';
import { LifecycleBComponent } from './lifecycle-b/lifecycle-b.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleAComponent,
    LifecycleBComponent,
    MainComponent,
    UserComponent,
    CompanyComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
