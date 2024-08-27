const ps = require("prompt-sync");

const prompt = ps();

let n = prompt("Enter the value of N for series: ");

let s = 0;
let p = 1;

for(i=0;i<n;i++){
  s = s+p;
  console.log(s);
  p = s-p;
}
