// js101
// list processing
// Leading Substrings

// Write a function that takes a string argument and returns a list of substrings of that string. 
// Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(str) {
  let arr = [];
  for (i = 1; i <= str.length; i++) {
    arr.push(str.slice(0,i));
  }
  return arr;
}

function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0,idx + 1));
}
