// JS101
// Easy 2
// convert a String to a Number

// Convert a number to a string without using built in functions like parseInt() or Number()

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

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

function stringToSignedInteger(str) {
  if (str[0] === '+') {
    return stringToInteger(str.slice(1));
  } else if (str[0] === '-') {
    return stringToInteger(str.slice(1)) * -1;
  } else {
    return stringToInteger(str);
  }
}

// Launch Solution
function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}