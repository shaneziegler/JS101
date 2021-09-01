// js101
// list processing
// All Substrings

// Write a function that returns a list of all substrings of a string. 
// Order the returned list by where in the string the substring begins. 
// This means that all substrings that start at index position 0 should come first, 
// then all substrings that start at index position 1, and so on. 
// Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

function leadingSubstrings(str) {
  let arr = [];
  for (i = 1; i <= str.length; i++) {
    arr.push(str.slice(0,i));
  }
  return arr;
}

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0,idx + 1));
}

function substrings(str) {
  return [...str].map((_, idx) => leadingSubstrings(str.slice(idx, str.length))).flat();  
}
