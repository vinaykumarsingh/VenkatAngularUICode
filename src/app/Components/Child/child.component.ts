import { stringify } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit, SimpleChanges, Input } from '@angular/core';
import { concat } from 'rxjs';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class AppChild implements OnInit, OnDestroy{

 
  constructor() {
  
  }

  @Input() dataInChild: string;


  ngOnDestroy() {
    
  }
  ngOnChanges(){
   
  }

  ngOnInit() {
   

  }

}