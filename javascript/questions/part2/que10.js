// Program to find
// the count number for 
// zeros in 2d matrix using
// nested loops an increment 
// operator

let a = [22,32,0,[44,0,32,0,23,23],23,0,[23,32,43,0,3,0,43]];

let zero = 0;

for(i=0;i<a.length;i++){

  if(a[i] == 0){
    zero++;
  }

  var check = Array.isArray(a[i]);

  if(check == true){
    for(j=0;j<a[i].length;j++){
      if(a[i][j] == 0){
        zero++;
      }
    }
  }
}

console.log("Total zeros in the array is: ",zero);

