// Add loop to program, so the user can do more than one calculation
// Add external file for prompts
// Add internationalization to prompts


const locale = Intl.DateTimeFormat().resolvedOptions().locale;
const language = locale.split('-')[0];

const fs = require('fs');

let rawdata = fs.readFileSync('calc_cfg.json');
const MESSAGES = JSON.parse(rawdata);

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num)) || num.trim() === '';
}

let runAgain;

do {
  const readline = require('readline-sync');

  prompt(MESSAGES[language].welcome);

  prompt(MESSAGES[language].first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[language].invalidNumber);
    number1 = readline.question();
  }

  prompt(MESSAGES[language].second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[language].invalidNumber);
    number2 = readline.question();
  }

  prompt(MESSAGES[language].operation);
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(MESSAGES[language].invalidOperation);
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

  console.log(MESSAGES[language].result + ` ${output}`);

  prompt(MESSAGES[language].runAgain);
  runAgain = readline.question();

} while (runAgain.trim().toLowerCase() === 'yes');

