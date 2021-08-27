// JS101
// Easy 5
// Combining Arrays

// Write a function that takes two arrays as arguments and returns an array containing 
// the union of the values from the two. There should be no duplication of values in the
//  returned array, even if there are duplicates in the original arrays. 
// You may assume that both arguments will always be arrays.

// combine two arrays, into 1 array, be remove any duplicate elements
// inputs - two arrays as arguements
// output - returns an array from function
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// data structs - use an array to combine both
//              - use an object to hold the elements to remove dups
//              - put final values back into an Array

// algo
//    combine arrays into 1 array - will have dups
//    put array into object using array elements as keys.  value is meaningless
//    turn object back into array and return it

function union(arr1, arr2) {
  let combinedArray = arr1.concat(arr2);
  let entriesArray = combinedArray.map(key => [key, '0']);
  let obj = Object.fromEntries(entriesArray);
  return Object.keys(obj);
}

// Refactored

function union(arr1, arr2) {
  return Object.keys(Object.fromEntries(arr1.concat(arr2).map(key => [key, ''])));
}

// LS Solution

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
                  if (!resultArray.includes(value)) {
                    resultArray.push(value);
                  }
                });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}