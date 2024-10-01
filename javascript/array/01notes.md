## map() method

- The map() method is used for creating a new array from an existing one, applying to each one of the elements of the first array.

**example**:

```
var new_array = arr.map(function callback(element, index, array)) {
// Return value for new_array
}[, thisArg]
```

## Filter

- The `filter()` method takes each element in an array and it applies a conditional statement against it.

If this conditional returns true, the element gets pushed to the output array.

If the condition returns false, the element does not get pushed to the output array.

## Reduce

- The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the `first two are used`.

    1. accumulator - the returned value of the previous iteration.
    2. currentValue - the current item in the array
    3. index - the index of the current item \[optional\]
    4. array - the original array on which reduce was called \[optional\].

**Example**:
```
arr.reduce(callback[, initialValue])
```

```
const arr=[1,2,3,4,5];

const output=arr.reduce(function(accumulator,currentIdx){
    acc+=curr;
    return acc;
});
console.log(output);
```
