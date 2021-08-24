import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
@Component({
  selector: 'app-angularBasics1',
  templateUrl: './angularBasics1.component.html',
  styleUrls: ['./angularBasics1.component.css']
})
export class AppAngularBasics1 implements OnInit{

  title = "Hi, Welcome1"
  a: number = 0.259;

  constructor() {
  }

  ngOnInit() {

  }

}