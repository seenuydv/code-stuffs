// Program to delete an
// occurance of an
// element of an array


let a = [22,32,54,43,54,22,34,32];

console.log("All the elements Initially:");

for(i=0;i<a.length;i++){
  console.log(a[i]);
}

console.log("\nLength of array before Deletion: ", a.length);

console.log("\nAll the elements After Deletion:");

for(i=0;i<a.length;i++){
  let d = 0;

  for(j=i+1;j<a.length;j++){
    if(a[i] == a[j]){
      a.splice(j);
    }
  }

  if(d == 0){
    console.log(a[i]);
  }

}

console.log("\nLenght of array after Deletion: ", a.length);
