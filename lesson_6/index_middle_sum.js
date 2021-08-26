// Problem Description
// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the left of N 
// is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array, 
// the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Test Cases
console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

// eslint-disable-next-line max-lines-per-function
function findEvenIndex(arr) {
  debugger;
  let middleIndex = -1;
  let leftSum;
  let rightSum;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      leftSum = 0;
    } else {
      leftSum = arr.slice(0,i).reduce((acc, elm) => acc + elm,0);
    }

    if (i === (arr.length - 1)) {
      rightSum = 0;
    } else {
      rightSum = arr.slice(i + 1).reduce((acc, elm) => acc + elm,0);
    }

    // console.log(i);
    // console.log(leftSum);
    // console.log(rightSum);
    // console.log('\n');

    if (leftSum === rightSum) {
      return i;
    }
  }
  return middleIndex;
}

findEvenIndex([1,2,3,4,3,2,1]);