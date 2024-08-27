// Find the input
// number is even or odd

const ps = require("prompt-sync");

const prompt = ps();

let num1 = prompt("Enter a Number: ");

if(num1%2 == 0){
  console.log("It's an Even Number!");
}
else{
  console.log("It's an Odd Number!");
}
