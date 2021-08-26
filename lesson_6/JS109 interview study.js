// Problem Description
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the 
// input string. 

// The input string can be assumed to contain only alphabets 
// (both uppercase and lowercase) and numeric digits.


// Test Cases
// console.log(duplicateCount("")) == 0
// console.log(duplicateCount("abcde")) == 0
// console.log(duplicateCount("abcdeaa")) == 1
// console.log(duplicateCount("abcdeaB")) == 2
// console.log(duplicateCount("Indivisibilities")) == 2

// Input string
// output number - count of dup characters - not number of dups
// loop through string - maybe use forEach
// build an object with count of each character converted to lowercase
// iterate through obj to find and count the values over 1 aka dups
// return duplicate count

function duplicateCount(inputStr) {
  let dupCount = 0;
  let obj = {};

  for (let idx = 0; idx < inputStr.length; idx++) {
    if (obj.hasOwnProperty(inputStr[idx].toLowerCase())) {
      obj[inputStr[idx].toLowerCase()] += 1;
    } else {
      obj[inputStr[idx].toLowerCase()] = 1;
    }
  }

  for (prop in obj) {
    if (obj[prop] > 1) {
      dupCount += 1;
    }
  }

  Object.values(obj).reduce((acc, elm) => )

  return dupCount;
}

function duplicateCount(inputStr) {
  let obj = {};

  inputStr.split("").forEach(char => {
    if (obj.hasOwnProperty(char.toLowerCase())) {
      obj[char.toLowerCase()] += 1;
    } else {
      obj[char.toLowerCase()] = 1;
    }
  });

  return Object.values(obj).filter(count => count > 1).length;
}