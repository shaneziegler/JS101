// JS101
// Easy 2
// convert a String to a Number

// Convert a number to a string without using built in functions like parseInt() or Number()

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function stringToInteger(inputStr) {
  let numbersList = ['0','1','2','3','4','5','6','7','8','9'];
  let outputNumber = 0;

  let index = 0;
  while ((index < inputStr.length) && numbersList.includes(inputStr[index])) {
    outputNumber = (outputNumber * 10) + numbersList.indexOf(inputStr[index]);
    index += 1;
  }
  return outputNumber;
}


// Launch solution

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}