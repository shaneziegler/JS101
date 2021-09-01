//js 101
// string processing
// delete vowels

// Write a function that takes an array of strings and returns an array of the same string values,
// but with all vowels (a, e, i, o, u) removed.

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

function removeVowels(arr) {
  const vowels = ['a','e', 'i', 'o', 'u'];

  return arr.map(str => str.split('').filter(char => !vowels.includes(char.toLowerCase())).join(''));
}
