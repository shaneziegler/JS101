// JS101
// String processing
// Lettercase Counter

// Write a function that takes a string and returns an object containing three properties: 
// one representing the number of characters in the string that are lowercase letters,
//  one representing the number of characters that are uppercase letters, 
// and one representing the number of characters that are neither.

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function letterCaseCount(str) {
  let countObj = {
    lowercase : 0,
    uppercase : 0,
    neither : 0
  }

  Array.from(str).forEach(char => {
    //! should just use half of isLetter to find if in lowercase or uppercase letter range instead of .toUpperCase/.toLowerCase
    if (isLetter(char) && (char === char.toUpperCase())) {
      countObj.uppercase += 1;
    } else if (isLetter(char) && (char === char.toLowerCase())) {
      countObj.lowercase += 1;
    } else {
      countObj.neither += 1;
    }
  });

  return countObj;
}

// LS solution
function letterCaseCount(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 }

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }

  return counts;
}


// LS Regex solution
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}