// js101
// easy 6
// Reverse It Part 1

Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}