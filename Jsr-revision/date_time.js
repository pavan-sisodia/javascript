let myDate = new Date();
// console.log(myDate.toDateString()); // Tue- Jan- 2024
// console.log(myDate.toISOString()); //2024- 01- 09T15:20:42.84Z
// console.log(myDate.toJSON()); //2024- 01- 09T15:20:42.84Z
// console.log(myDate.toLocaleDateString()); //1/9/24
// console.log(myDate.toLocaleTimeString()); //8:56:27 PM
// console.log(myDate.toString()); //Tue Jan 09 2024 20:57:33 GMT+0530(India Standerd Time)
// console.log(myDate.toTimeString()); // 20:57:33 GMT+0530(India Standerd Time)
// console.log(myDate.toUTCString()); // Tue,09 Jan 2024 15:32:01 GMT
// console.log(myDate.getTimezoneOffset()); // Tue,09 Jan 2024 15:32:01 GMT
let myCreatedDate = new Date(2024,0,19);
console.log(myCreatedDate.toLocaleString());