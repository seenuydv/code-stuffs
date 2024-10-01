const ps = require("prompt-sync");
const prompt = ps();

let a = [22,43,43,54,56,34,54];

console.log("All the Elements in Array: ");
for(i=0;i<a.length;i++){
  console.log(a[i]);
}

let n = prompt("Enter a Number for it's index: ");

for(i=0;i<a.length;i++){

  if(a[i] == n){
    console.log("The index Number of: ",n,"is: ",i);
  }

}
