// Find the largest number in
// a given array

let a = [22,45,54,56,76,65,78,43,87];

for(i=0;i<a.length;i++){
  if(a[i]>a[i+1]){
    a[i] = a[i] + a[i+1];
    a[i+1] = a[i] - a[i+1];
    a[i] = a[i] - a[i+1];
  }
}

console.log("Maximum Value in Array: ",a[a.length-1]);
