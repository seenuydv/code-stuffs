// Program to modify the
// value of element in an
// array by selecting it's
// index

const ps = require("prompt-sync");

const prompt = ps();


let a = [23,45,54,54,34,34];

console.log("All the elements before modification:");

for(i=0;i<a.length;i++){
  console.log(a[i]);
}

let val = prompt("Enter the value: ");
let n = prompt("Enter the Index: ");

for(i=0;i<a.length;i++){
  if(i==n){
    a[i] = val;
  }
}

console.log("All the elements after modification:");

for(i=0;i<a.length;i++){
  console.log(a[i]);
}



