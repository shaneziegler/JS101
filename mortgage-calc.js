// JS101 - Assigment
// Mortgage Calculator

// Get loan amount - convert to float - check if input is Valid
// Get APR in format like 5.25 - check if input is Valid
// Get loan duration in years/month as 2 inputs - check if input is valid
// Convert loan duration to number of months
// convert APR to monthly interest rate
// Calc payment
// let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

// Inputs:
// loan amount
// Annual Percentage Rate (APR) in format like 5.25
// loan duration

// Outputs:
// monthly interest rate
// loan duration in months

// let p = 1000;
// let j = (10.0 / 100) / 12.0;
// let n = 12;
// let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// console.log(m.toFixed(2));

const locale = Intl.DateTimeFormat().resolvedOptions().locale;
// const locale = 'en-US';
const language = locale.split('-')[0];

const fs = require('fs');

let rawdata = fs.readFileSync('mortgage_calc_messages.json');
const MESSAGES = JSON.parse(rawdata);

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num)) || num.trim() === '';
}

let runAgain;

do {

  prompt(MESSAGES[language].welcome);
  prompt(MESSAGES[language].principal);
  let principal = readline.question();

  while (invalidNumber(principal)) {
    prompt(MESSAGES[language].invalidNumber);
    principal = readline.question();
  }

  prompt(MESSAGES[language].interestRate);
  let interestRateAnnual = readline.question();

  while (invalidNumber(interestRateAnnual)) {
    prompt(MESSAGES[language].interestRate);
    interestRateAnnual = readline.question();
  }

  prompt(MESSAGES[language].loanLength);
  let loanLength = readline.question();

  while (invalidNumber(loanLength)) {
    prompt(MESSAGES[language].loanLength);
    loanLength = readline.question();
  }

  let interestRateMonthly = (interestRateAnnual / 100) / 12;

  let m = principal * (interestRateMonthly /
    (1 - Math.pow((1 + interestRateMonthly), (-loanLength))));
  console.log(MESSAGES[language].result + ` ${m.toFixed(2)}\n`);

  prompt(MESSAGES[language].runAgain);
  runAgain = readline.question();

} while (runAgain.trim().toLowerCase()[0] === 'y');