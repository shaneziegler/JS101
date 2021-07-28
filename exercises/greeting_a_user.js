// JS101
// Easy 2
// Greeting a user

let readline = require('readline-sync');

let name = readline.question('What is your name? ');

if (name.charAt(name.length - 1) === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toLocaleUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
