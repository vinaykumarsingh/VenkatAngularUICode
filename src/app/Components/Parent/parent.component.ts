import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { concat } from 'rxjs';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class AppParent implements OnInit, OnDestroy{

 
  constructor() {
  
  }

  dataInParent = "parent to child works" ;

  ngOnDestroy() {
    
  }
  ngOnChanges(){
   
  }

  ngOnInit() {
    
  }

}