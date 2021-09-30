/* eslint-disable max-lines-per-function */
// js101
// interpretive problem solving
// Now I know my ABCs

// Write a function that takes a word string as an argument and returns true
// if the word can be spelled using the set of blocks, false otherwise.
// You can consider the letters to be case-insensitive when you apply the rules.

// A collection of spelling blocks has two letters per block, as shown in this list:
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each block once.

// in: a word as a string
//  case doesnt not matter

// out: true or false

// ds:
//  a nested array to hold the 2 character blocks

// algo:
// create nested array of word blocks
// iterate over each character in the input string
//  - if current char in one of the letter blocks then:
//      - remove that letter block from the nested Array
//  - if current char not in the letter blocks then end function and return false
// if made it past all the interation, then return true

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

//! would have been better to use a non-nest array like block = ['BO', 'XK', 'DQ']
//! could be much shorter with RegEx

function isBlockWord(word) {
  let block = [['B','O'],['X','K'],['D','Q'],['C','P'],['N','A'],['G','T'],['R','E'],['F','S'],['J','W'],['H','U'],['V','I'],['L','Y'],['Z','M']];

  let failed = false;
  let arr = word.toUpperCase().split('');
  arr.forEach(char => {
    let foundIndex;
    for (let idx = 0; idx < block.length; idx += 1) {
      if (block[idx].includes(char)) {
        foundIndex = idx;
        break;
      }
    }
    if (foundIndex !== undefined) {
      block.splice(foundIndex, 1);
    } else {
      failed = true;
    }
  });
  return !failed;
}