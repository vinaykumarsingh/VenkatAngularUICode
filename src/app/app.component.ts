import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

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

    // String and methods
    // 1) length
    // 2) slice
    // 2) subString
    // 3) Substr

    ////Length
    // let tempStr = 'vinaykumarsingh'
    // let temp1 ;
    // console.log('length', tempStr.length)
    // temp1 = tempStr.length?'true':'false'
    // console.log('length', temp1)

    ////Slice
    // let tempStr = 'vinaykumarsingh'
    // let temp1 ;

    // temp1 = tempStr.slice(5, tempStr.length)
    // console.log('slice', temp1)
    // let firstName =  tempStr.slice(0, 5)
    // let middleName =  tempStr.slice(5, 10)
    // let lastName =  tempStr.slice(10, tempStr.length)
    // let fullName = firstName + " " + middleName  + " " + lastName
    // console.log('fullName', fullName)

    // tempStr.slice(-5)
    // tempStr.slice(-5, tempStr.length)

    ////subString (doesn't expect -ve value)
    // let tempStr = 'vinaykumarsingh'
    // let temp1 ;
    // tempStr.substring(5)

    ////Substr 
    let tempStr = 'vinaykumarsingh'
    let temp1 ;
    temp1 = tempStr.substr(3,10)

    // concat
    tempStr.concat("ranchi")

    //uppercase
    tempStr.toUpperCase()
    //trim
    let x = '  vs3486@gmail.com     '
    x.trim() === 'vs3486@gmail.com'

    //string to array
    var vv = 'vinay singh'
    vv.split(" ")

  }
}
