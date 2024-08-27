// filter method in
// array
// filter() method
// takes each element in 
// an array and it applies
// a conditional statement
// aginst it.
// If it returns true
// it get pushed to the array
// otherwise not!

let a = [1,2,3,4,5,6,7];

let out = a.filter((x)=>{
  return x>5;
})

console.log(out);
