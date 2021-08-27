import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppUIBasics } from "./Components/UIBasics/uiBasics.component"
import { AppAngularBasics1 } from "./Components/AngularBasics1/angularBasics1.component"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAngularBasics2 } from './Components/AngularBasics2/angularBasics2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AppUIBasics,AppAngularBasics1, AppAngularBasics2
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
