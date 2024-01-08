// +++++++++++++ Number ++++++++++++++++

/* Aaj ham number ke methods ke bare me jankari karenge
1=> constructor
2=> toExponential
3=> toFixed
4=> toLocalString
5=> toPrecision
7=> toString
8=> valueOf
*/
let firstNumber = 5.74;
let secondNumber = new Number(6)
// console.log(firstNumber + secondNumber);
// console.log(firstNumber.toPrecision(1)); // toPrecision() pricise value deta hae 
// console.log(firstNumber.toExponential()); // 
// console.log(firstNumber.toLocaleString()); // 

// +++++++++++ math +++++++++++++

let min = 1;
let max = 6;
// console.log(Math.floor(Math.random()*(max - min + 1)) +min);

// console.log(Math.abs(1,2,3,7,9,0)); //Math.abs karne par ek arry ki nyuntam value aati hai
let mint = (Math.random()*(max - min +1) + min)
console.log(Math.floor(mint));