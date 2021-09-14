// JS101
// Medium 2
// Letercase Percantage Ratio

// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(str) {
  let count = {
    uppercase: 0,
    lowercase: 0,
    neither: 0
  };

  let ratio = {
    uppercase: 0,
    lowercase: 0,
    neither: 0
  };

  count.uppercase = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0;
  count.lowercase = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;
  count.neither = str.length - count.lowercase - count.uppercase;

  ratio.lowercase = (100 * (count.lowercase / str.length)).toFixed(2);
  ratio.uppercase = (100 * (count.uppercase / str.length)).toFixed(2);
  ratio.neither = (100 * (count.neither / str.length)).toFixed(2);

  return ratio;
}

