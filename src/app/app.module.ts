import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppUIBasics } from "./Components/UIBasics/uiBasics.component"
import { AppAngularBasics1 } from "./Components/AngularBasics1/angularBasics1.component"
import { AppSiblingComponnet2 } from "./Components/SiblingComponnet2/SiblingComponnet2.component";
import { AppSiblingComponnet1 } from "./Components/SiblingComponnet1/SiblingComponnet1.component"


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAngularBasics2 } from './Components/AngularBasics2/angularBasics2.component';
import { FormsModule } from '@angular/forms';
import { ShareDataService } from './Service/shareData.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, AppUIBasics,AppAngularBasics1, AppAngularBasics2, AppSiblingComponnet2, AppSiblingComponnet1
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
