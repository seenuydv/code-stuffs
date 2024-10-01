const ps = require("prompt-sync");

const prompt = ps();

let a = [23,43,54,43,34,76,65];

console.log("All the elements before removal: ");

for(i=0;i<a.length;i++){
  console.log(a[i]);
}

let n = prompt("Enter the index value for removal: ");

for(i=0;i<a.length;i++){
  if(i==n){
    a.splice(i,i);
    break;
  }
}

console.log("All the elements after removal: ");

for(i=0;i<a.length;i++){
  console.log(a[i]);
}
