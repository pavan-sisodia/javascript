const user = {
    userName:"Pavan ",
    price: 999,
    welcomeMessage:function(){
        console.log(` ${this.userName} , welcome to my website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// console.log(this);

// function one(){
//     let userName = "Pavan"
//     console.log(this.userName);
// }
// one()

// const one = function(){
//     let userName = "Pavan"
//     console.log(this.userName);
// }
// one()
const one = () => {
    let userName = "Pavan"
    console.log(this);
}
// one()

// const addtwo = (num1,num2)=>{
//     return num1 + num2
// }

// ++++++ Implisit return (implisite meanse me man leta hun)++++++++++++
// const addtwo = (num1,num2)=> num1 + num2
// const addtwo = (num1,num2)=> (num1 + num2)
const addtwo = (num1,num2)=> ({userName: "Pavan"})

console.log(addtwo(5,4))











