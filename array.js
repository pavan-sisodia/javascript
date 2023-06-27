// Arraay
// const supperHeroes = [`Saktiman, Aryaman, Nagraj, dorimon`];
//console.log(supperHeroes[1])

const number = [1, 2, 3, 4, 5, 6, 7];
// console.log(number[0]);
const studentName = ["Ram", "Shyam", "Sheeta", "Babita"];
// console.log(studentName[0]);

// Array Method 
studentName.push("Sarita");
// console.log(studentName);
studentName.pop()  
// console.log(studentName);
studentName.unshift("Hnuman")  
// console.log(studentName);
// console.log(studentName.includes("sweta"));
// console.log(studentName.indexOf("sweta"));
// console.log(studentName.includes());
const newNumber = number.join();
// console.log(number);
// console.log(newNumber);
// console.log(typeof newNumber);


// slice, splice

// console.log("A", number);
const Nm1 = number.slice(1, 3);
// console.log(Nm1);

// console.log("B", number);
// const Nm2 = number.slice(1, 3);
// console.log(Nm1);

// const supper_heroes = ["Saktiman", "Aryaman", "Nagraj", "dorimon"];
// const marvalHeros = ["Ironman", "Thor", "spiderMan"];
// supper_heroes.puah[marvalHeros]
// console.log(supperHeroes)

const Goad = ["Shiv", "Vishnu", "Brahamma"];
const Tample = ["mahakalesvar", "Omkalesvar", "kedarnath"]
// Goad.push(Tample);
// console.log(Goad);

// Goad.concat(Tample);
// console.log(Goad);

// const AllGoadTample =Goad.concat(Tample)
// console.log(AllGoadTample); 

const AllGoadAndTample = [...Goad, ...Tample]
// console.log(AllGoadAndTample);

const NumberOfarray =[1, 2, 3, 4, [2, 3, 4, 5, [3, 4, 5, 6, [4, 5, 6, 7,]]]];
const NumberOfNewArray = NumberOfarray.flat(Infinity);
// console.log(NumberOfNewArray);

// console.log(Array.isArray("Pavan"));
// console.log(Array.from("Pavan"));
// console.log(Array.from({name:"Pavan"}));

const No1 = 100;
const No2 = 200;
const No3 = 300;
console.log(Array.of(No1,No2,No3));














