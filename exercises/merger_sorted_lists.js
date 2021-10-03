/* eslint-disable max-len */
// JS 101
// Advanced 1
// Merge Sorted Lists

// Write a function that takes two sorted arrays as arguments and returns a new array
// that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

function merge(arr1, arr2) {
  let newArr = [];

  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx < arr1.length || arr2Idx < arr2.length) {
    if ((arr1Idx < arr1.length) && ((arr1[arr1Idx] <= arr2[arr2Idx]) || (arr2Idx >= arr2.length))) {
      newArr.push(arr1[arr1Idx]);
      arr1Idx += 1;
    } else if ((arr2Idx < arr2.length)) {
      newArr.push(arr2[arr2Idx]);
      arr2Idx += 1;
    }
  }
  return newArr;
}

//! LS Solution is good
//! makes copies of array
//! starts copying arrays into the new array, until it rubs out of 1 of them
//! then it copies the rest the remaining array in the return into what it has with concat

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}