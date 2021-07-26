// JS101 - Small Problems
// Easy 1
// Sum or Product of Consecutive Integers

// PEDAC
// PEDAC stands for “[Understand the] Problem, Examples / Test Cases, Data Structure, Algorithm, and Code.” 
// PEDAC has two primary objectives: process the problem (PEDA) and code with intent (C).

// Process the Problem
// - Understand the Problem
// - Identify expected input and output
// - Make the requirements explicit
// - Identify rules
// - Mental model of the problem (optional)

// Examples/Test Case
// - Validate understanding of the problem

// Data Structure
// - How we represent data that we will work with when converting the input to output.

// Algorithm
// - Steps for converting input to output

// Code with Intent
// - Code
// - Implementation of Algorithm

// Write a program that asks the user to enter an integer greater than 0, 
// then asks whether the user wants to determine the sum or the product of 
// all numbers between 1 and the entered integer, inclusive.

// Inputs:
// Integer greater than 0
// "s" to computer sum or "p" to computer product

// Outputs:
// Sum or product of consecutive integers

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// OR
// The product of the integers between 1 and 6 is 720.

function sum_or_product_calc(int, operation) {
  debugger;
  if (int === 1) {
    return 1;
  } else {
    if (operation === 's') {
      return int + sum_or_product_calc(int - 1, operation);
    }

    if (operation === 'p') {
      return int * sum_or_product_calc(int - 1, operation);
    }
  }
}

let readline = require('readline-sync');

let inputInteger = parseInt(readline.question('Please enter an integer greater than 0: '));
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (!['s','p'].includes(operation)) {
  console.log('Unknown operation.');
} else {
  let result = sum_or_product_calc(inputInteger, operation);
  console.log(`The ${(operation === 's') ? 'sum' : 'product'} of the integers between 1 and ${inputInteger} is ${result}.`);
}

// Further Exploration
// What if the input was an array of integers instead of just a single integer? 
// How would your computeSum and computeProduct functions change? 
// Given that the input is an array, how might you make use of the Array.prototype.reduce() method?