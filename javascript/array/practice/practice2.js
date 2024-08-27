// Program to strip down
// the duplicate elements
// from an array

let num = [0,1,1,22,32,34,34,32,56,56,56,32,22,42,22,4,2];

for(i=0;i<num.length;i++){
  let d = 0;
  for(j=i+1;j<num.length;j++){
    if(num[i] == num[j]){
      d = 1;
    }
  }
  if(d == 0){
    console.log(num[i]);
  }
}
