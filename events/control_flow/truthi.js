const userEmail = "pavan@js.com";
if (userEmail) {
//    console.log("Got user email");
}else{
//    console.log("Don't havve user email");
}

// Falsy value

// false, 0, -0, Bigint 0n, "", NaN, null, undefind

// Truthy value
// "0", "false", " ", [], {}, function(){}

const number = []
if (number.length === 0) {
    // console.log("Array is impty");
}

const emptyObject ={}
if (Object.keys(emptyObject).length === 0) {
    // console.log("Object is imoty");
}

// Nulish coalescing Operator ?? null undefined

const value1 = 5 ?? 10;
// console.log(value1);

const value2 = null ?? 10;
// console.log(value2);

const value3 = undefined ?? 15;
// console.log(value3);

// Terniary Operator

// condition ? true : false

const icecreamPrice = 100;
icecreamPrice <= 80 ? console.log("less then 80") : console.log("More then 80");