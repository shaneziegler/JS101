
Falsy:
- 0
- false
- undefined
- null
- NaN
- ""


Array.prototype.map 
- called on an array
- takes a callback function as an argument
- returns a new array in which each element is equal to the return value of the callback function for the element in the original array




Array.prototype.filter

- higher order function that takes in a callback function as an argument
- parameters of the callback: the element, the index and the original array
- calls the callback function for each element, passing that element as an argument to the callback
- returns that particular element into a new array if the callback returns a truthy value
- returns a new array


*/



/*
assumptions 
  array will alwyas be postitive 
  array will always be 3 or more elememnts


  request breakdownn
  creeate a fuction
    given an array of integers return num of arithmetic progressions' of size 3 from the list
      arithmetic progressions is number in sequence incresing by the same amount (1,2,3)(1,3,5)(2,4,6)
    count each time one is found
    return the total number found


psuedo code

function progressions(array)
  set arithmeticProgressionsFound variable to 0

  outer loop - loop through the array for the first element end array at 3rd to last item in array
    middle loop - sets the second element in the array to check start with 2nd item in the loop and ends with 2nd to last item in array
    inner loop - runs thorugh the last item in teh array, starting with the third element until the last element
      if array[middleLoop] - array[outerLoop] egauls array[innerLoop] - array[middleLoop]
        increase arithmeticProgressionsFound by 1


*/

/*
You're given an array of integers.  You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
*/





// Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10