// arr.reduce(callback[, initialvalue])

let arr=[1,2,3,4,5];

// const output=arr.reduce(function(acc,curr){
//   acc += curr;
//   return acc;
// });

let out = arr.reduce((x,y)=>{x+=y; return x;})

console.log(out);
