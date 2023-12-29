// ++++++++++++  if ++++++++
const temprature = 52;
if (temprature < 50) {
  //  console.log("less then 50");
  //  return
} else {
  //    console.log("greater then 50");
}

const score = 200;
if (score > 100) {
  let power = "fly";
  // console.log(`User pover: ${power}`);
}

const balance = 1000;
if(balance < 500){
  console.log("balance is smallerthe 500");
}else if (balance < 600) {
  console.log("balance is lessthen 600");
}else if (balance<800) {
  console.log("balance is less then 800");
}else{
  console.log("balance is less then 2000");
}


const userLogedIn = true;
const userDevitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true

if (userLogedIn && userDevitCard) {
  console.log("Allow to by cources");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
