// Find the Type
// of Triangle
// By Entered Three
// Sides

const ps = require("prompt-sync");

const prompt = ps();

let s1 = prompt("Enter the First Side: ");
let s2 = prompt("Enter the Second Side: ");
let s3 = prompt("Enter the Third Side: ");

if((s1*s1)+(s2*s2)==(s3*s3) || (s2*s2)+(s3*s3)==(s1*s1) || (s1*s1)+(s3*s3)==(s1*s1)){
  console.log("It's a Right Angle Triangle");
}
else if(s1 == s2 || s2 == s3 || s1 ==s3){
  console.log("It's a Isoceles Triangle!")
}
else if(s1 == s2 && s2 == s3){
  console.log("It's a equilateral Triangle!");
}
else{
  console.log("It's a scalane Triangle!");
}
