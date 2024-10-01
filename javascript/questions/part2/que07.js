const ps = require("prompt-sync");

const prompt = ps();

let num = prompt("Enter a Number: ");
let c=0;

for(i=0;num/10 != 0;i++){
  num = parseInt(num/10);
  c++;
}

console.log(c);
