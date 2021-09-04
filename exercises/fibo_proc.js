/* eslint-disable id-length */
// JS101
// Medium 1
// Fibonacci Numbers - Procedural

// In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. 
// In a language that is not optimized for recursion, some (but not all) recursive functions can be 
// extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, 
// you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

// in - number - nth number in fibo sequence to be computed
// out - number - nth number in fibo seq
// examples -
// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	F13	F14	F15	F16	F17	  F18	  F19	  F20
// 0	1	  1	  2	  3	  5	  8	  13	21	34	55	89	144	233	377	610	987	1597	2584	4181	6765

// ds - probably just variables
// algo - fibo = sum of preceding 2 fibo numbers

function fibonacci(num) {
  let fibo;
  let prev1 = 0;
  let prev2 = 1;
  if (num === 0) return 0;
  if (num === 1) return 1;

  for (let i = 1; i < num; i++) {
    fibo = prev1 + prev2;
    prev1 = prev2;
    prev2 = fibo;
  }
  return fibo;
}

// LS solution
function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}
