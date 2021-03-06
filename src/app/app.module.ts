import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { AppAngularBasics2 } from './Components/AngularBasics2/angularBasics2.component';
import { ShareDataService } from './Service/shareData.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUIBasics } from "./Components/UIBasics/uiBasics.component"
import { AppAngularBasics1 } from "./Components/AngularBasics1/angularBasics1.component"
import { AppSiblingComponnet2 } from "./Components/SiblingComponnet2/SiblingComponnet2.component";
import { AppSiblingComponnet1 } from "./Components/SiblingComponnet1/SiblingComponnet1.component";
import { AppReactiveFormsInAngular } from './Components/ReactiveFormsInAngular/ReactiveFormsInAngular.component';

@NgModule({
  declarations: [
    AppComponent, AppUIBasics, AppAngularBasics1, AppAngularBasics2,
    AppSiblingComponnet2, AppSiblingComponnet1, AppReactiveFormsInAngular
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule
    ,

  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
