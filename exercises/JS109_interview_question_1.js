// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

//! don't include the index element in the sums

//! edge cases 
//! no solution found return -1
//! answer could be index 0


// set found boolean to false
// set an index position to 0
// iterate over the array from the left
// compare the sum of values on the left side from index 0 to current index - 1 to the sum of the value at index + 1 to the last element in the array(length - 1)
// if matching sums found set found to true and exit loop
// return that index
// if not found return -1


Test Cases
console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

function findEvenIndex(arr) {
  let found = false;
  let index = 0;

  while (!found && index < arr.length) {
    let leftArr = arr.slice(0, index);
    let rightArr = arr.slice(index + 1, arr.length);
    let leftSum = leftArr.reduce((a, b) => a + b, 0);
    let rightSum = rightArr.reduce((a, b) => a + b, 0);

    if (leftSum === rightSum) {
      found = true;
    } else {
      index += 1;
    }
  }

  if (found) {
    return index;
  } else {
    return -1;
  }
}

let str = "(())((()())())"