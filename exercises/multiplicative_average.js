// js101
// easy 5
// multiplicative average

// Write a function that takes an array of integers as input, multiplies all of the integers together, 
// divides the result by the number of entries in the array, 
// and returns the result as a string with the value rounded to three decimal places.



multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

function multiplicativeAverage(arr) {
  return (arr.reduce((acc, elm) => acc *= elm) / arr.length).toFixed(3);
}

