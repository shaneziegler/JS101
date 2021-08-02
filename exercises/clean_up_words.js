// JS101
// Easy 3
// Clean up the words

// Given a string that consists of some words and an assortment of non-alphabetic characters,
//  write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
//   If one or more non-alphabetic characters occur in a row,
//  you should only have one space in the result (i.e., the result string should never have consecutive spaces).

function cleanUp(str) {
  const letterACode = 'a'.charCodeAt(0);
  const letterZCode = 'z'.charCodeAt(0);

  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    if ((str.toLowerCase().charCodeAt(i) >= letterACode)
    && (str.toLowerCase().charCodeAt(i) <= letterZCode)) {
      newStr += str.charAt(i);
    } else if (newStr.charAt(newStr.length - 1) !== ' ') {
      newStr += ' ';
    }
  }

  return newStr;
}

cleanUp("---what's my +*& line?");    // " what s my line "