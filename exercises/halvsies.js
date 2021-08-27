// JS101
// Easy 5
// Halvsies

// Write a function that takes an array as an argument and returns an array that contains two elements, 
// each of which is an array. Put the first half of the original array elements in the first element of the return value,
//  and put the second half in the second element.
// If the original array contains an odd number of elements, place the middle element in the first half array.

// input - a single array
// output - a nested array.  outer array has 2 elements, which are array.  inner arrays are the input array cut in half
//          

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// odd number of element, then make first array the longer one
// empty array as input returns nested array or empty arrays

// data struct - nested array - array with 2 elements that are themselves arrays

// edge cases - if the input array has 0 or 1 elements then put org array in first element and [] in second element
// find midpoint of input array
// round midpoint up to an integer
// cut array in half into 2 arrays
// put those 2 arrays into another array as elements and return that

function halvsies(arr) {
  if (arr.length <= 1) {
    return [arr,[]];
  }
  let midpoint = Math.ceil(arr.length / 2);
  let leftArr = arr.slice(0, midpoint);
  let rightArr = arr.slice(midpoint);
  return [leftArr, rightArr];
}

// refactored

function halvsies(arr) {
  let midpoint = Math.ceil(arr.length / 2);
  return [arr.slice(0, midpoint), arr.slice(midpoint)];
}