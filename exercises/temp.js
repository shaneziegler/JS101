let readline = require('readline-sync');
let done = false;

while (!done) {
  let answer = readline.question('?');
  if (answer !== ' ') {
    done = true;
  }
}

console.log('the ansewer is' + answer);
