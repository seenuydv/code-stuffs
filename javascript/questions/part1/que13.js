const ps = require("prompt-sync");

const prompt = ps();

let num1 = prompt("Enter the Number: ");
let range1 = prompt("Enter The Start Range No: ");
let range2 = prompt("Enter The End Range No: ");

if(num1 > range1 && num1 < range2){
  console.log("The Number is Within the range!");
}
else{
  console.log("The Number is out of range!");
}
