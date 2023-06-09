import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleAComponent } from './lifecycle-a/lifecycle-a.component';
import { LifecycleBComponent } from './lifecycle-b/lifecycle-b.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleAComponent,
    LifecycleBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
