// JS101 - Assigment
// Mortgage Calculator

function setPromptsLanguage() {
  // Set language for prompts from default locale
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  //const locale = 'ex-uk';
  let language = locale.split('-')[0];

  const fs = require('fs');

  let rawdata = fs.readFileSync('mortgage_calc_messages.json');
  let messages = JSON.parse(rawdata);

  // Set language to our default, if we don't have messages for their language
  if (!(language in messages)) {
    language = 'default';
  }
  return messages[language];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num)) || num.trim() === '' || Number(num) < 0;
}

function getAPR(messages, readline) {
  prompt(messages.interestRate);
  let interestRateAnnual = readline.question();

  while (invalidNumber(interestRateAnnual)) {
    prompt(messages.invalidNumber);
    interestRateAnnual = readline.question();
  }
  return interestRateAnnual;
}

function getLoanAmount(messages, readline) {
  prompt(messages.principal);
  let principal = readline.question();

  while (invalidNumber(principal)) {
    prompt(messages.invalidNumber);
    principal = readline.question();
  }
  return principal;
}

function getLoanTerm(messages, readline) {
  prompt(messages.loanLength);
  let loanLengthInYears = readline.question();

  while (invalidNumber(loanLengthInYears) || Number(loanLengthInYears) === 0) {
    prompt(messages.invalidLoanTerm);
    loanLengthInYears = readline.question();
  }
  return loanLengthInYears;
}

function doRunAgain(messages, readline) {
  prompt(messages.runAgain);
  let runAgain = readline.question().trim().toLowerCase();
  while (runAgain !== 'y' && runAgain !== 'n') {
    prompt(messages.runAgain);
    runAgain = readline.question().trim().toLowerCase();
  }
  return runAgain;
}

function calculateMonthlyPayment(principal,
  interestRateMonthly, loanLengthInMonths) {
  let monthlyPayment;

  if (interestRateMonthly === 0) {
    monthlyPayment = principal / loanLengthInMonths;
  } else {
    monthlyPayment = principal * (interestRateMonthly /
      (1 - Math.pow((1 + interestRateMonthly), (-loanLengthInMonths))));
  }
  return monthlyPayment;
}


function loanCalculator(messages, readline) {
  let principal = Number(getLoanAmount(messages, readline));
  let interestRateAnnual = Number(getAPR(messages, readline));
  let loanLengthInYears = Number(getLoanTerm(messages, readline));

  let loanLengthInMonths = loanLengthInYears * 12;
  let interestRateMonthly = (interestRateAnnual / 100) / 12;

  let monthlyPayment = calculateMonthlyPayment(principal,
    interestRateMonthly, loanLengthInMonths);

  console.log(messages.result + `${monthlyPayment.toFixed(2)}\n`);
}

// Start of program execution
const MESSAGES = setPromptsLanguage();
const readline = require('readline-sync');
prompt(MESSAGES.welcome);

let runAgain;

do {
  loanCalculator(MESSAGES, readline);

  runAgain = doRunAgain(MESSAGES, readline);

} while (runAgain === 'y');