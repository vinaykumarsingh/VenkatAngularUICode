import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { concat } from 'rxjs';
@Component({
  selector: 'app-angularBasics1',
  templateUrl: './angularBasics1.component.html',
  styleUrls: ['./angularBasics1.component.css']
})
export class AppAngularBasics1 implements OnInit, OnDestroy{

  title = "Hi, Welcome1"
  a: number = 0.259;

  constructor() {
    console.log("I'm in constructor")
    
  }
    // ngOnChanges

  // ngOnInit

  // ngAfterViewInit

  //ngOnDistroy
  ngOnChanges(changes: SimpleChanges){
    console.log("I'm in this.ngOnChanges")
    console.log(changes)

  }



  ngOnInit() {
    console.log("I'm in this.ngOnInit")
    this.title = "Hi, Title chaznged"
  }
  
  ngAfterViewInit() {
    console.log("I'm in this.ngAfterViewInit")

  }

  ngOnDestroy(){
    console.log("destroying child...")
  }

}