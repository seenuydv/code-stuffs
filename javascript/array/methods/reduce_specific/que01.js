// In reduce we
// can use a variable
// that store previos
// operation value;

let arr=[1,2,3,4,5,6,7];

let out = arr.reduce((total))

function total(x,y){
  x*=y;
  return x;
  // your code here
}

console.log(out);
