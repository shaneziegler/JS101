/* eslint-disable max-len */
// JS101
// Advanced 1
// Binary Search

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

// in - a SORTED array and the element to be searched for
// out - the index of the found element OR -1 if not found
// ds - 
// algo - maybe recursion
// setup left and right index pointers
// call helper function with arr, serchitem, leftrpoint and right pointer
// find midpoint of array
// if midpoint index element is equal to the searchItem the return index
// if serachitem < midpoint then set left point to start of array - set rightpointer to midpoint - 1
// if serachitem > midpoint then set left point to start of array - set leftpointer to midpoint + 1
// set midpointindex to mid of leftpointer and rightpointer
// if midpoint > rightpointer OR midpoint < leftpointer then return -1

// [1, 3, 5] 7 

function binarySearch(arr, searchItem) {
  function binSearchHelper(arr, searchItem) {
    if (searchItem > arr[rightPointer] || searchItem < arr[leftPointer]) return -1;

    let midpoint = Math.floor((leftPointer + rightPointer) / 2);

    if (arr[midpoint] === searchItem) return midpoint;
    if (searchItem < arr[midpoint]) rightPointer = midpoint - 1;
    if (searchItem > arr[midpoint]) leftPointer = midpoint + 1;

    return binSearchHelper(arr, searchItem);
  }

  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  return binSearchHelper(arr, searchItem);
}

binarySearch([1,3,5], 3);

 binarySearch([1,3,5], 7);

binarySearch([1,3,5], 1);


binarySearch([1,3,5], 5);

binarySearch([1,3,5], -1);

