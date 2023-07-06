// Immeditaley Invoked Function Expressions (IIFE)
(function one(){
    // here "one" named IIFI
    console.log(`DB CONNECTED`);
})();

// ( () => {
//     console.log(`DB CONNECTED two`);
// })()

( (name) => {
    console.log(`DB CONNECTED two ${name}`);
})('Pavan')