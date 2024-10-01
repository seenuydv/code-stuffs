// filter() array method demonstration

const arr=[1,2,3,4,5,6];

function isOdd(x)
{
  return x%2;
}

const output=arr.filter(isOdd);

console.log(output);
