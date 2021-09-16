// JS101
// Medium
// Sum Square - Square Sum

// Write a function that computes the difference between the square of the sum of the first
// `count` positive integers and the sum of the squares of the first `count` positive integers.

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

function sumSquareDifference(num) {
  return (sumNums(num) ** 2) - squareSum(num);
}

function sumNums(num) {
  if (num === 1) return 1;
  return num + sumNums(num - 1);
}

function squareSum(num) {
  if (num === 1) return 1;
  return (num ** 2) + squareSum(num - 1);
}


//student solution using reduce and map
function sumSquareDifference(num) {

  let squareOfSum = [...Array(num)].map((_, index) => index + 1)
    .reduce((acc, num) => acc + num, 0) ** 2;

  let sumOfSquares = [...Array(num)].map((_, index) => index + 1)
    .map(num => num ** 2).reduce((acc, num) => acc + num, 0);

  return squareOfSum - sumOfSquares;
}


// another one - check out how the array was created
function sumSquareDifference(num){
  let array = Array.from({length: num}, (_, i) => i + 1)
  return sqSum(array) - sumSq(array)
}

function sumSq(array){
 return array.reduce((acc, curVal) => acc + curVal**2, 0) 
}

function sqSum(array){
  return array.reduce((acc, curVal) => acc + curVal, 0)**2
}