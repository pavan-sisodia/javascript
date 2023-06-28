//const tinderUser = new Object(); // singaletan Object 

const tinderUser = {};    // Non Singaltn Object
tinderUser.Id = "1432xyz"
tinderUser.name = "Raju"
tinderUser.isLogedin = false

// console.log(tinderUser);

const heritejcity = {
    MahakalNagari: "Ujain",
    Tample:{
        Name1: "Mahakalesvar",
        Name2: "Omkalesvr"
    }
}
// console.log(heritejcity.Tample);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
// const obj3 = Object.assign({}, obj1, obj2); 
 //{}-curly brasis is a target object 
 //other wise all are source Object
 //wese output par koi phark nhi padta 
 const obj3 = {...obj1,...obj2} //MOst of cases all developer are use this
// console.log(obj3);
console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogedin'));









