// Program to find max
// between three
const ps = require("prompt-sync");

const prompt = ps();

let num1 = prompt("Enter a First Number: ");
let num2 = prompt("Enter a Second Number: ");
let num3 = prompt("Enter a Third Number: ");

if(num1 >= num2 && num1 >= num3){
  console.log(num1 + " is Max!");
}
else if(num2 >= num1 && num2 >= num3){
  console.log(num2 + " is Max!");
}
else{
  console.log(num3 + " is Max!");
}

