// JS101
// Easy 3
// Fibonacci Number Location By Length

// Write a function that calculates and returns the index of the first Fibonacci number 
// that has the number of digits specified by the argument.
// (The first Fibonacci number has an index of 1.)
// You may assume that the argument is always an integer greater than or equal to 2.


function findFibonacciIndexByLength(len) {
  if (len === 1) {
    return 1;
  }

  let index = 2n;
  let currentFibo = 1n;
  let prevFibo = 1n;
  let tempFibo;

  while (String(currentFibo).length < len) {
    // console.log(`PRE: currentFibo = ${currentFibo}  prevFibo = ${prevFibo}`);
    index += 1n;
    tempFibo = currentFibo;
    currentFibo += prevFibo;
    prevFibo = tempFibo;
    // console.log(`POST: currentFibo = ${currentFibo}  prevFibo = ${prevFibo}`);
  }
  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
