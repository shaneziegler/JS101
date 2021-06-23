// Add loop to program, so the user can do more than one calculation

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num)) || num.trim() === '';
}

let runAgain;

do {
  const readline = require('readline-sync');

  prompt("Welcome to the calculator!");

  prompt("Whats the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("That is not a valid number, enter a valid number.");
    number1 = readline.question();
  }

  prompt("Whats the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("That is not a valid number, enter a valid number.");
    number2 = readline.question();
  }

  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt("That is not a valid operation, please choose 1, 2, 3, or 4.");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt("If you would like to run the calculator program again, type in yes:");
  runAgain = readline.question();

} while (runAgain.trim().toLowerCase() === 'yes');
