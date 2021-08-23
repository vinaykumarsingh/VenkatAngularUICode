import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppUIBasics } from "./Components/UIBasics/uiBasics.component"
import { AppAngularBasics1 } from "./Components/AngularBasics1/angularBasics1.component"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, AppUIBasics,AppAngularBasics1
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
