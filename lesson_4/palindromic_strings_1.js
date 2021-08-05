// JS 101
// Easy 4
// Palindromic Strings

// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
// A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

function isPalindrome(str) {
  let stringMidPoint = Math.ceil(str.length / 2);
  let startingHalf = str.slice(0, stringMidPoint);
  let endingHalf = str.slice(str.length - stringMidPoint).split('').reverse().join('');

  return startingHalf === endingHalf;
}

// Launch solution
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

