// Detatype
/*
Datatype do prkar ke hote hei 
Premitive or None primitive detatype
Primitive deatype =>
Number
Null
booliyan
Bigint
String
Symbol
Undefined
None Primitive detatype =>
Array
Object
Function
*/

const herose = ["Spiderman", "Batman", "Ironman"];
// console.log(typeof herose);

const logedin = {
    Name: "Pavan",
    age: 26,
    Height: "5.75 cm"
}
// console.log(logedin);

// const myFunction = function(){
//     console.log("Hello Thakur");
// }
function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  const mycar ={
    make: "Honda",
    moddle: "Accord",
    year: 1998,
  }
//   console.log(mycar); //mycar
  myFunc(mycar)
//   console.log(mycar.make); //Toyota

  //+++++++++++____________+++++++++

  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
//   console.log(factorial(3)); // 6

const square = function (number){
   return number * number;
}
console.log(square(9)); // 81