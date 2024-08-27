// Program to check if 
// the given integers is
// positive, negative or zero.

const ps = require("prompt-sync");

const prompt = ps();

let num1 = prompt("Enter a Number: ");

if(num1 < 0){
  console.log("It's a Negative Number!");
}
else if(num1 > 0){
  console.log("It's a Positive Number!");
}
else{
  console.log("It's a Zero!");
}
