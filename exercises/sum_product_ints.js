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

// Write a function that takes one integer argument, which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd.
// You may assume that the argument is a valid integer value.

// Inputs:
// Bill amount
// Tip percentage

// Outputs:
// The tip amount formatted to $xx.xx
// The total bill formatted to $xx.xx

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

let readline = require('readline-sync');

let bill = parseFloat(readline.question('What is the bill? '));
let tipPercent = parseFloat(readline.question('What is the tip percentage? '));

let tipAmount = bill * (tipPercent / 100);

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${(bill + tipAmount).toFixed(2)}`);