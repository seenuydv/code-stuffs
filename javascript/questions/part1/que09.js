// Program to check 
// whether the entered
// input is Number or Not

const ps = require("prompt-sync");

const prompt = ps();

let data = prompt("Enter some data: ");

if(isNaN(data) == true){
  console.log("It's not a Number!");
}
else{
  console.log("It's a Number!");
}
