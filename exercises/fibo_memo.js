/* eslint-disable max-len */
// JS101
// Medium 1
// Fibonacci Numbers - Memoization

// Our recursive fibonacci function from an earlier exercise isn't very efficient. 
// It starts slowing down with an nth argument value as low as 35. One way to improve 
// the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future reuse, 
// instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, 
// using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been 
// computed by the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

let lookup = {
  0: 0,
  1: 1,
  2: 1
};

function fibonacci(nth) {
  if (nth in lookup) {
    return lookup[nth];
  }
  lookup[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return lookup[nth];
}

// x = 0;
// function test(num) {
//   return (x = num * num);
// }