// js1-1
// easy 5
// combine two lists.

// Write a function that combines two arrays passed as arguments, 
// and returns a new array that contains all elements from both array arguments, with each element taken in alternation.
// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// input - two arrays - non empty - both arrays are the same length
// output - single array

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// ds - an array 

// create empty oputput array
// interate through array 1
//    add array 1 element to output array
//    add array 2 element to poutput array
// return array

function interleave(arr1, arr2) {
  let outputArray = [];
  arr1.forEach((element, idx) => outputArray.push(element, arr2[idx]));
  return outputArray;
}
