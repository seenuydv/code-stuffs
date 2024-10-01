// Turn an array of numbers
// into a long string of all
// those numbers.

let a = [1,2,3];

let out = a.reduce(cool);

function cool(x,y){
  x += y;
  return x;
}

console.log(out)

// "123"
