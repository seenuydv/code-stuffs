// Program to print the 
// sum of all digits
// in a given number!

const ps = require("prompt-sync");

const prompt = ps();

let num = prompt("Enter a Number: ");

let sum = 0;

for(i=0;num/10 != 0;i++){
  sum += num%10;
  num = parseInt(num/10);
}

console.log(sum);
