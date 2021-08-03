// JS101
// Easy 4
// Searching 101

// Write a program that solicits six numbers from the user
//  and logs a message that describes whether the sixth number 
// appears among the first five numbers.

// Enter the 1st number: 25
// The number 17 appears in 25,15,20,17,23.

const ordinal = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

let numberCount = 0;
let numArray = [];

const readline = require('readline-sync');

do {
  numArray.push(readline.question(`Enter the ${ordinal[numberCount]} number: `));
  numberCount++;
} while (numberCount < 6);

let lastNumber = numArray.pop();
if (numArray.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numArray.join(',')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numArray.join(',')}.`);
}