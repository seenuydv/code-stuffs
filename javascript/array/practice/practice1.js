const ps = require("prompt-sync");

const prompt = ps();

let num1 = [23,24,54,43,45,34];

for(i=0;i<num1.length/2;i++){
  for(j=0;j<num1.length-1;j++){
    if(num1[j]>num1[j+1]){
      num1[j] = num1[j] + num1[j+1];
      num1[j+1] = num1[j] - num1[j+1];
      num1[j] = num1[j] - num1[j+1];
    }
    else{
      continue;
    }
  }
}


console.log("For smallest 3")

for(i=0;i<3;i++){
  console.log(num1[i]);
}

console.log("For largest 3")

for(i=num1.length-1;i>num1.length-4;i--){
  console.log(num1[i]);
}
