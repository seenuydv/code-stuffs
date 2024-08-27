let data = [22,34,43,54,43,53,54,65,65];

console.log("All the Element intially: ");

for(i=0;i<data.length;i++){
  console.log(data[i]);
}

console.log("Length Before Deleting the Array: ",+ data.length);

console.log("\nAll the Elements After Deleting Duplicate Values: ");

for(i=0;i<data.length;i++){
  for(j=i+1;j<data.length;j++){
    if(data[i] == data[j]){
      data.splice(j,j);
    }
  }
  console.log(data[i]);
}

console.log("Length After Deleting Values in the Array: ", + data.length);
