// Reduce method demo

const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

// using reduce array method

const output=users.reduce(function(acc,curr){
  if(acc[curr.age])
    // if present in array object
  {
    acc[curr.age]++;
  }
  else{
    // if not present in array object
    acc[curr.age]=1;
  }
  return acc;
},{})
console.log(output);
