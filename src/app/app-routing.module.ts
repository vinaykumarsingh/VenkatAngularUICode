import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppSiblingComponnet2 } from "./Components/SiblingComponnet2/SiblingComponnet2.component";
import { AppSiblingComponnet1 } from "./Components/SiblingComponnet1/SiblingComponnet1.component"
import { AppReactiveFormsInAngular } from './Components/ReactiveFormsInAngular/ReactiveFormsInAngular.component';
 

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'first-component', component: AppSiblingComponnet1 },
  { path: 'second-component', component: AppSiblingComponnet2 },
  { path: 'react-forms', component: AppReactiveFormsInAngular },

];


// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }