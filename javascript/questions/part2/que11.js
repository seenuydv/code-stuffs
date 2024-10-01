// Program to generate a
// new array which the 
// product of two array of
// the same size

a = [2,34,34,6,76,5,4,76];

b = [22,3,4,54,2,43,23,2];

let c = [];

for(i=0;i<a.length;i++){
  c[i] = a[i]*b[i];
}

for(i=0;i<c.length;i++){
  console.log(c[i]);
}
