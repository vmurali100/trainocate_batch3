import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StudentComponent } from './student/student.component';
import { studentsReducer } from './student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './student.effect';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, StudentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ student: studentsReducer }), // A reducer Need to be Passed to Create A store ..
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
