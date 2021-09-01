// JS101
// list processing
// Palindrmoic Substrings

// Write a function that returns a list of all palindromic substrings of a string. That is, 
// each substring must consist of a sequence of characters that reads the same forward and backward.
// The substrings in the returned list should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; 
// that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, 
// assume that single characters are not palindromes.


function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0,idx + 1));
}

function substrings(str) {
  return [...str].map((_, idx) => leadingSubstrings(str.slice(idx, str.length))).flat();  
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

function palindromes(str) {
  let palindromes = [];

  for (let i = 0; i < str.length; i++) {
    for (let end = i + 1; end < str.length; end++) {
      let sub = str.slice(i, end + 1);
      if (sub === sub.split('').reverse().join('')) {
        palindromes.push(sub);
      }
    }
  }
  return palindromes;
}

// using substrings function from before
function palindromes(str) {
  let palindromes = [];
  let allSubs = substrings(str);

  allSubs.forEach(sub => {
    if ((sub.length > 1) && (sub === sub.split('').reverse().join(''))) {
        palindromes.push(sub);
      }});
  return palindromes;
}

// LS solution
function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}
          
function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}
