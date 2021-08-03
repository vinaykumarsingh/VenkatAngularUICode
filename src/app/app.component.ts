import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
// variable 
// var var1:string = 'vinay'
// let let1: string = 'singh'
// constru
// const

  title = 'Training';

  constructor() {

  }

  ngOnInit() {
    debugger
    var var1 = 'vinay'
    let let1 = 'singh'
    let1 = 'vinay'
    const const1  = 'Angular learn'

    let d1 = 3;
    let d2 = 5;
    console.log('summing data===>',d1 + d2)
    console.log('is same ',var1 === let1)

  }
}
