// JS101 - Small Problems
// Easy 1
// How big is the room?


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


// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.


// Inputs:
// width and length of room in meters
// via readlinesync

// Outputs:
// output area of room to the console
// output area in both sqaure meters and square feet

let readline = require('readline-sync');
console.log('Enter the length of the room in meters:');
let length = readline.prompt();

console.log('Enter the width of the room in meters:');
let width = readline.prompt();

let squareMeters = width * length;
const SQMETERS_TO_SQFEET = 10.7639;
console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${(squareMeters * SQMETERS_TO_SQFEET).toFixed(2)} square feet).`);