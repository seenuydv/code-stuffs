// Given an array of
// objects users, print user
// of particular
// age along with their
// frequency

const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

let out = users.reduce((acc,curr)=>{
  acc[curr.age]++;
  return acc;
});

console.log(out);

