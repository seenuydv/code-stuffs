// Program to find
// the Sum of all digits
// of enter Number!

const ps = require("prompt-sync");

const prompt = ps();

let num = prompt("Enter a Number: ");

let n = num;

let sum = 0;

for(i=0;n/10 != 0;i++){
  sum += n%10;
  n = parseInt(n/10);
}

console.log("Sum of "+num+" is: "+sum);
