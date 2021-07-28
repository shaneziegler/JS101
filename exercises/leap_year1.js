// JS101 - Small Problems
// Easy 1
// Leap Years (Part 1)

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
//

// Outputs:
//

function isLeapYear(year) {
  return ((year % 4 === 0) && ((year % 100 !== 0) || year % 400 === 0))
}