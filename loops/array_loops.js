// for of loop

const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
   // console.log(num);
}

const greeting = "Hellow world"
for (const greet of greeting) {
   // console.log(`each character is ${greet}`);
}

// Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FA', "France")
// console.log(map);

for (const key in map) {
  console.log(key);
}

for (const [key, value] of map) {
   // console.log(key, ':-', value);
}

// for in loop

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject ={
    js: 'javaScript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift for apple'
}
for (const key in myObject) {
   // 
 // console.log(key);
  // console.log(`${key} short cut for,- ${myObject[key]}`);
}

//const programing = ["js", "python","java", "c++"]
//for (const key in programing) {
  //console.log(programing[key]);
//}