let numbers = [3, 9, 8, 2, 4, 6, 7, 5, 1];

function onlyOdds(nums) {
  nums.forEach( (num, idx) => {
    if ( num % 2 !== 0) {
      nums.splice(idx, 1);
    }
  })
  return nums;
}

onlyOdds(numbers);

The code returns the array `[ 3, 4, 6, 8 ]`.
This code shows the unwanted side effects that happen when you mutate the array being iterated over in a .forEach method.

Line 1 intializes and assigns an array to the variable `numbers`.  Line 12 invokes the onlyOdds() function and passes the `numbers` array as the arguement.
The first line of the function performs a forEach on the passed in nums array with a 




primitive definition 

/*
forEach() is used to iterate through an array and pass each element to the callback function as an argument--but crucially, forEach does not use the return value of the callback function and always returns undefined


forEach -verbose

`array.prototype.forEach()`: is an array iteration method which is called directly on an array and executes a callbackFn for each element in the calling array. `forEach()` is functionally equivalent to a `for` or `while` loop but requires no start or end conditions.  `forEach()` can only cause side effects as it cannot pass an explicit return value and will always return `undefined`.  **This method does not mutate the caller.**

---

/*
forEach() is used to iterate through an array and perform an action on each element. It takes a callback function as an argument and passes each element to the callback function as an argument--but crucially, forEach does not use the return value of the callback function and always returns undefined


forEach -verbose

`array.prototype.forEach()`: is an array iteration method which is called directly on an array and executes a callbackFn, passing each element of the calling array to the callbackFn as an argument. `forEach()` is functionally equivalent to a `for` or `while` loop but requires no start or end conditions.  `forEach()` should be used to cause side effects as it cannot pass an explicit return value and will always return `undefined`.  **This method does not mutate the caller, however, the callbackFn may mutate the caller.**

---


