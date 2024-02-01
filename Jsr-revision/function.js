
// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2)
// }
// addTwoNumbers(4,6)

function addTwoNumbers(num1,num2) {
    // let result = num1+num2
    // return result
    return num1 +num2
}
const result = addTwoNumbers(4,6)
// console.log(result);

function userLogedInMessage (username){
    if(!username){
        console.log("Please enter your user name");
    }
    return `${username} user just logen`
}
// console.log(userLogedInMessage("Pavan"));

const user = {
    userName :"pavan",
    price : 199
}
function handelObject (anyobject){
    console.log(`user is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handelObject(user)

const marray =[300,400, 500, 600]
function handelarry (anyarray){
    return anyarray[0]
}
console.log(handelarry(marray));