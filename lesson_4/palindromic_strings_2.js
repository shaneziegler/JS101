// JS 101
// Easy 4
// Palindromic Strings

// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
// A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  string = string.toLowerCase();
  let newString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if ((string[idx] >= 'a' && string[idx] <= 'z') || (string[idx] >= '0' && string[idx] <= '9')) {
      newString = newString.concat(string[idx]);
    }
  }
  // console.log(newString);
  return isPalindrome(newString);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false


// Alternate Launch solution using REGEX

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindrome(string);
}