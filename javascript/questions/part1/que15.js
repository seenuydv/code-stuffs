const ps = require("prompt-sync");

const prompt = ps();

let year = prompt("Enter the Year: ");

if(year%4 == 0){
  console.log("It's a Leap Year!");
}
else{
  console.log("It's not a Leap Year!");
}
