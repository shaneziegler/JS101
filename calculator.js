// Ask the user for the first number
// Ask the user for the second number
// Get the operation to perform
// Perform the calculation 
// Output code to the console

const readline = require('readline-sync');

console.log("Welcome to the calculator!");

// console.log("Whats the first number?");

let number1 = readline.question("Whats the first number?");
console.log(number1);

let number2 = readline.question("Whats the second number?");
console.log(number2);

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
    output = Number(number1) + Number(number2);
} else if (operation === '2') {
    output = Number(number1) - Number(number2);
} else if (operation === '3') {
    output = Number(number1) * Number(number2);
} else if (operation === '4') {
    output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
