// JS 101
// Easy 4
// Running Totals

// Write a function that takes an array of numbers and returns an array with the same number of elements,
// but with each element's value being the running total from the original array.

function runningTotal(arr) {
  let total = 0;
  let runningTotalArr = [];
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    runningTotalArr.push(total);
  }
  return runningTotalArr;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []