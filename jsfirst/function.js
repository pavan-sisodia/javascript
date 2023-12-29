// Functions

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Pavan");
    // return result
    return number1 + number2
    }
// addTwoNumbers(2,3)
const result = addTwoNumbers(2,3)
// console.log("result:", result);

function userLogedInMessage(username){
    if (username === undefined){
        console.log("Please enter your user Name");
        return
    }
    return `${username} Just loged in`
}
// console.log(userLogedInMessage("Pavan"))
//console.log(userLogedInMessage());

function calculateCartPrice(...num1){
   return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    username : "Pavan Sisosidia",
    price : 199
}
function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)









