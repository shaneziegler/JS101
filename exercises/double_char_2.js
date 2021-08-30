// js101
// easy 6
// double char 2

// Write a function that takes a string, doubles every consonant character in the string,
//  and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""


function doubleConsonants(str) {
  const vowels = ['a','e','i','o','u'];

  return str.split('').map(char => {
    if ((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') && (!vowels.includes(char.toLowerCase()))) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}
