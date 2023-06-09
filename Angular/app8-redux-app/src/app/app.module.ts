import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from 'src/app.effects';
import { appReducer } from 'src/app.reducer';

import { AppComponent } from './app.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MainComponent } from './main/main.component';
import { ValidDirective } from './valid.directive';

@NgModule({
  declarations: [AppComponent, ItemCreateComponent, ItemListComponent, MainComponent, ValidDirective],
  imports: [BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
