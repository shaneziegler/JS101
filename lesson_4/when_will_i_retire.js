// JS 101
// Easy 4
// When will I retire?

let readline = require('readline-sync');

let currentAge = parseInt(readline.question('What is your age? '));
let retireAge = parseInt(readline.question('At what age would you like to retire? '));

let currentYear = new Date().getFullYear();
let yearsOfWorkLeft = retireAge - currentAge;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsOfWorkLeft}.`);
console.log(`You have only ${yearsOfWorkLeft} years of work to go!`);