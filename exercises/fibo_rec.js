// JS101
// Medium 1
// Fibonacci Numbers - Recursion

// The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers.
//  The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, 
//  the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on.
//  In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

function sum(num) {
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

// Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

function fibonacci(num) {
  if ((num === 1) || (num === 2)){
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);  
}
