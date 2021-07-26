// JS101 - Small Problems
// Easy 1
// Short Long short

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

// Write a function that takes two strings as arguments, 
// determines the length of the two strings, 
// and then returns the result of concatenating the shorter string, 
// the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

// Examples
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

function shortLongShort(str1, str2) {
  return str1.length < str2.length ? str1.concat(str2, str1) : str2.concat(str1, str2);
}