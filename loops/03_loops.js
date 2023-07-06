const myNumers = [1, 2, 3,]
// const myTotal = myNumers.reduce(function(acc, currvl) {
//     console.log(`acc: ${acc} and currvl: ${currvl}`);
//     return acc + currvl
// })

const myTotal = myNumers.reduce( (acc, curr) =>  acc+curr, 0)
console.log(myTotal);