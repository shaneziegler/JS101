/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
// JS101
// Advanced 1
// Merge Sort

let temp = mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
console.log(temp);
temp = mergeSort([5, 3]);                 // [3, 5]
console.log(temp);
temp = mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]
console.log(temp);
temp =  mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
console.log(temp);
temp =  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
console.log(temp);

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let midpoint = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midpoint);
  let rightArr = arr.slice(midpoint);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return mergeSortedLists(leftArr, rightArr);
}

function mergeSortedLists(arr1, arr2) {
  let outArr = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    if (arr1[arr1Idx] <= arr2[arr2Idx]) {
      outArr.push(arr1[arr1Idx]);
      arr1Idx += 1;
    } else {
      outArr.push(arr2[arr2Idx]);
      arr2Idx += 1;
    }
  }
  outArr = outArr.concat(arr1.slice(arr1Idx), arr2.slice(arr2Idx));
  return outArr;
}

// let a = [ 5, 12, 20, 99, 101 ];
// let b = [ 2, 3, 4, 7, 11 ];
// let arr = [];
// arr = mergeSortedLists(a, b);
