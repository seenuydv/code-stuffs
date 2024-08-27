// Program to demonstrate
// shift function for removing
// value at the beginning of an 
// array

let a = [34,44,54,66,65,54,54];

console.log("All the element before shifting elements: ");

for(i=0;i<a.length;i++){
  console.log(a[i]);
}

console.log("Length of an array before unshifting any: ", a.length);

let shifted_value = a.shift();

console.log("All the element after shifting elements: ");

for(i=0;i<a.length;i++){
  console.log(a[i]);
}

console.log("Shifted Value is: ", shifted_value);


