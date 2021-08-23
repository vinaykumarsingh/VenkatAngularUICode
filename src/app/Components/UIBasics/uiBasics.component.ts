import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
@Component({
  selector: 'app-uiBasics',
  templateUrl: './uiBasics.component.html',
  styleUrls: ['./uiBasics.component.css']
})
export class AppUIBasics implements OnInit{
  onloadMessage = "UI Basics works"
  constructor() {
  }

  ngOnInit() {

  }

}