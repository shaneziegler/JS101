// JS 101
// Easy 4
// Letter Swap

// Given a string of words separated by spaces,
// write a function that swaps the first and last letters of every word.
// You may assume that every word contains at least one letter,
// and that the string will always contain at least one word.
// You may also assume that each string contains nothing but words and spaces,
// and that there are no leading, trailing, or repeated spaces.

function swap2(str) {
  let words = str.split(' ');
  let swappedArr = words.map(word => {
    let firstLetter = word[0];
    let lastLetter = '';
    if (word.length > 1) {
      lastLetter = word[word.length - 1];
    }
    let newString = lastLetter + word.slice(1, word.length - 1) + firstLetter;
    return newString;
  });
  return swappedArr.join(' ');
}

function swap3(str) {
  let swappedWordsArr = str.split(' ').map(word => {
    let wordArr = word.split('');
    [wordArr[0], wordArr[wordArr.length - 1]] =
      [wordArr[wordArr.length - 1], wordArr[0]];
    return wordArr.join('');
  });
  return swappedWordsArr.join(' ');
}

function swap(str) {
  return str.split(' ').map(word => {
    let wordArr = word.split('');
    [wordArr[0], wordArr[wordArr.length - 1]] =
      [wordArr[wordArr.length - 1], wordArr[0]];
    return wordArr.join('');
  }).join(' ');
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"