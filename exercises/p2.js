/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
// Problem:
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the 
// input string. 
// The input string can be assumed to contain only alphabets 
// (both uppercase and lowercase) and numeric digits.

// Inputs:  string of only alphanumeric
// Outputs:  number - integer
// count of distinct case-insensitive 
//  alphabetic characters and numeric digits that occur more than once in the 
// input string. 

// Examples:
console.log(duplicateCount("")) == 0;
console.log(duplicateCount("abcde")) == 0;
console.log(duplicateCount("abcdeaa")) == 1;
console.log(duplicateCount("abcdeaB")) == 2;
console.log(duplicateCount("Indivisibilities")) == 2;

// Edge Cases: 
// Data Structure:
// Use an object to hold count of each occurence of a alphanumeric

// Algo:
// split the input string into an array of single characters
// create an empty "seen" object
// iterate over the array
//   if current element already in seen object then increment count
//   otherwise add a new property to the object for the character with a count of 1
  
// set counter to 0  
// iterate over the seen object  
//   increment counter if a property is > 1
// return counter

function duplicateCount(str) {
  let arr = str.split('');
  
  let seen = {};

  arr.forEach(elm => {
    if (elm.toLowerCase() in seen) {
      seen[elm.toLowerCase()] += 1;
    } else {
      seen[elm.toLowerCase()] = 1;
    }
  });

  let counter = 0;
  for (let prop in seen) {
    if (seen[prop] > 1) counter += 1;
  }
  return counter;
}

