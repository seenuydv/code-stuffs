const ps = require("prompt-sync")

const prompt = ps();

let age = prompt("Enter your age: ");

if(age < 18){
  console.log("You are not Eligible to Vote!");
}
else{
  console.log("You are Eligible to Vote!");
}
