// js101
// easy 6
// Get the middle character

// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
// If the string has an odd length, you should return exactly one character. 
// If the string has an even length, you should return exactly two characters.

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

function centerOf(str) {
  return str.length % 2 === 0 ? str[(str.length / 2) - 1] + str[str.length / 2] : str[Math.floor(str.length / 2)];
}