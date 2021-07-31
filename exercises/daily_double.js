// JS101
// Easy 3
// Daily Double

// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all
// consecutive duplicate characters collapsed into a single character.

function crunch(str) {
  let resultString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== resultString[resultString.length - 1]) {
      resultString += str[i];
    }
  }
  return resultString;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""