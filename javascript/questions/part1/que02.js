// Program to check 
// Max between two numbers

const ps = require("prompt-sync");

const prompt = ps();

let num1 = prompt("Enter First Number: ");
let num2 = prompt("Enter Second Number: ");

if(num1 < num2){
  console.log(num1 + " is Maximum!");
}
else{
  console.log(num2 + " is Maximum!");
}

