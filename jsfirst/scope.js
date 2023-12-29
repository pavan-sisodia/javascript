// scope
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
let a = 300;
if (true){
    let a = 10;
    const b = 20;
    var c = 30;
//     console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one (){
   const  userName = "Pavan"
   function two(){
    const website = "Youtube"
    console.log(userName);
   }
   //console.log(website);

   two()
}

//one()

if(true){
   const userName = "Pavan"
   if(userName === "Pavan"){
    const website = " youtube"
    //console.log(userName + website);
   }
   //console.log(website);
}
//console.log(userName);


console.log(addone(5))
function addone(num){
    return num +1
}

addTwo(5)
const addTwo = function(num) {
    return num + 2
}







