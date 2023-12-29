// +++++++++++++ Objects +++++++++++++++++

// NOTE- master of JavaScript learn Objects and Eents

// singaltan

// object literal

const user = {
     name : "Pavan",
     age: 22,
     email: "pavan@javascript.com",
     cource: "JavaScript",
     twoDayWeek: ["Saturday","Sunday"],
     logdin: false,
    }
    // console.log(user.age);
    // console.log(user["email"]);
    user.email= "pavansisodia@python.com"
    // console.log(typeof user);
    // console.log(user);
    // Object.freeze(user)
    user.email= "pavansisodia@google.com"
    // console.log(user);
    user.greeting = function(){
        console.log("Hellow dear user");

    }
    console.log(user.greeting);












