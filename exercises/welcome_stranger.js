// JS101 - Small Problems
// Easy 2
// Welcome Stranger

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

// Create a function that takes 2 arguments, an array and an object. 
// The array will contain 2 or more elements that, when combined with adjoining spaces, 
// will produce a person's name. 
// The object will contain two keys, "title" and "occupation", and the appropriate values. 
// Your function should return a greeting that uses the person's full name, 
// and mentions the person's title.

// Example
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


function greetings(nameArray, jobObject) {
  return `Hello, ${nameArray.join(' ')}! Nice to have a ${jobObject.title} ${jobObject.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
