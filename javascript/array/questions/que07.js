const ps = require("prompt-sync");

const prompt = ps();

let num = prompt("Enter some digits: ");

let c=0;

let n = num;

for(i=0;n/10 != 0;i++){
  
  n = parseInt(n/10);
  c++;
}

console.log("\nTotal Digits in "+num+" is: "+c);
