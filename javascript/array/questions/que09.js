let a = [22,35,65,43,87,43,87,98,43,23];

for(i=0;i<a.length;i++){
  if(a[i]>a[i+1]){
    a[i] = a[i]+a[i+1];
    a[i+1] = a[i]-a[i+1];
    a[i] = a[i]-a[i+1];
  }
}

console.log("The maximum element in the array is: ",a[a.length-1]);
