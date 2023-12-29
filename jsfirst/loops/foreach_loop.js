// for each loops

const coading = [ "python", "rubhy", "java", "js", "cpp"]
// coading.forEach( function(item) {
//     console.log(item);
// })

// coading.forEach((key) =>{
//     console.log(key);
// })

// coading.forEach( (key, index, arr) => {
//     console.log(key, index, arr);
// })

const myCoading =[
    {
        languageName:"JavaScript",
        laanguageFile: "js"
    },
    {
        languageName:"Java",
        laanguageFile: "Java"
    },
    {
        languageName:"Python",
        laanguageFile: "Py"
    }
]
myCoading.forEach( (key)=>{
   // console.log(key.languageName);
})


const value = coading.forEach( (item)=>{
    // console.log(item);
    return item //forEach loop never return the value
    // Hamesa hi return me Undefined hi aata hai
})
//console.log(value);

const myNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// const myValue = myNum.filter( (num)=> num >4)
// console.log(myValue);

// const myValue = myNum.filter( (num)=> {
//     return num >4 
// })

const newNum = []
myNum.forEach( (num)=>{
    if (num>4) {
        newNum.push(num)
    }
})
// console.log(newNum);