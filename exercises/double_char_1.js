// js101
// easy 6
// double char part 1

// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

function repeater(str) {
  return str.split('').map(char => char + char).join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

