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

    // //Data Types
    // 1) String
    // 2) Object
    // 3) Number
    // 4) Boolean
    // 5) array
    // 6) null
    // 7) undefined
    // 8) function
    let temp
    temp = 'vinay'
    temp = 'vinay1'
    
    let numTemp = 3;
    let boolTemp = true
    const objTemp = {
      brandName: 'ACER',
      assembledIn: 'India',
      yearMang: 2009,
      color: 'black',
      isMAC:false
    }
    let nullTemp = null;
    let undefinedTemp;
    const arrayTemp = [1,2,3,4,'',null,undefined, [], objTemp,boolTemp]
    let funValue = checkDataType(10, 9, arrayTemp)
    console.log('funValue',funValue)
    function checkDataType(a, b, c) {
      console.log('im in function')
      return 3+3
    }
    
    // const checkDataType1 = () =>{
    //   console.log('im in function2')

    // }

    // ?? const
    // hoisting

  }
}
