// JS101 - Small Problems
// Easy 1
// UTF-16 string value

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

// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
// (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)


function utf16Value(str) {
  return str.split('').reduce((sum, char) => sum += char.charCodeAt(0),0);
}


utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811



