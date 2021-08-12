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
    // let tempStr = 'vinaykumarsingh'
    // let temp1 ;
    // temp1 = tempStr.substr(3,10)

    // concat
    // tempStr.concat("ranchi")

    //uppercase
    // tempStr.toUpperCase()
    //trim
    // let x = '  vs3486@gmail.com     '
    // x.trim() === 'vs3486@gmail.com'

    //string to array
    // var vv = 'vinay singh'
    // vv.split(" ")

    //NAN - let x = 300/ "Ranchi";

    // var f1 = 2.345
    // f1.toFixed(2)
    // f1.toFixed(3)

    //Number()
    // Number(true)
    // Number(false)
    // Number("11")
    // Number("Ranchi")
    // Number("12.23")
    //parseInt => Alwway sreturn whole Number
    // Number.parseInt("10")
    // Number.parseInt("-10")
    // Number.parseInt("12 23 345")


    // Array - Call by Address/ Reference
    const a = ['a', 'b', 'c']
    a[0]// a
    a[a.length-1]//c

    const temp1 = []
    temp1[0] = 2;
    temp1[1] = 3;
    console.log(temp1);
// Creating new array other way
    const temp2 = new Array('Vinay', 'Singh')
    console.log(temp2)
    if(temp2.length) console.log('true')
    // Accesing array elemnts
    temp2[0]
    temp2[1]

    //Looping Array
    const temp3 = ['Vinay', 'Kumar', 'Singh']

    // //For Loop
    // for (let i= 0; i<temp3.length; i++) {
    //   console.log(temp3[i])
    // }

    //forEach Loop
    // temp3.forEach( x => {
    //   console.log(x)
    // })

    // Adding and Removing array elemnts 
    const addArray = ['a','b',1,2,3,4,5]
    addArray.push('pushedItem');
    addArray[addArray.length] = "AnotherPush";
    console.log(addArray)

    addArray.pop();

    //check if data is array 
    Array.isArray(addArray) 

    const testObj = {
      'a':123,
      'b':1234
    }

    //Array Shify / Unshift
    //shift is similar to pop but remove 1st item ie 0th Item
    //unshift is similar to push but add 1st item ie 0th Item

    const city = ['a','b', 'c']
    // city.shift();
    // city.unshift('d');

    // console.log(city);

    // Delete array Item - Delete leavs  undefined value. It delete array item value only 
    // delete city[2]
    // console.log(city);

    // Splice
    city.splice(1,0,'x','y','z')
    console.log(city);
    // Adding and deleting
    city.splice(3,1,'p','q')
    // Adding
    city.splice(3,0,'p','q')

    // deleting
    city.splice(3,1)

    // Test
    const objA = {
      firstelemrnt: 'd',
      secondelement: 'e',
      thirdelement:'f'
    }

    const arrayA:any = ['a', 'b']

    arrayA.push(objA)
    console.log(arrayA)

    let temp11 = "ABC"
    temp11 = "ABCVDFFD"
    
    var Array1 = [1,2,3,4,5]
    // const Array2 = [2,3,4,5,6]
    const Array2 = []
    for (var i= 0 ; i<Array1.length; i++ ) {

      Array1[i] = Array1[i]+1

      let test1 = "test1"
      var test2 = "test2"

    }

    // console.log(Array2)
    // console.log(test2)
    // console.log(test1)


    // merging two arrays
    const Array11 = [1,2,3]
    const Array12 = [4,5,6]
    const Array13 = [7,8,9]

    // const final = Array11.concat(Array12, Array13)
    const final = Array11.concat(Array12.concat(Array13))

    console.log(final);

    //Sorting
    const array123 = ['bal','apple','cat']
    array123.sort()
    console.log(array123)


  }
}
