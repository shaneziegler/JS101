// Js101
// Easy 2
// convert a number to a string

function integerToString(int) {
  let numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let outputString = '';

  if (int === 0) {
    return '0';
  }

  while (int > 0) {
    outputString = numberList[int % 10] + outputString;
    int = (int - (int % 10)) / 10;
  }
  return outputString;
}

// My original answer
function signedIntegerToString(int) {
  if (int === 0) {
    return '0';
  } else if (int < 0) {
    return '-' + integerToString(int * -1);
  } else {
    return '+' + integerToString(int);
  }
}

// My answer using Math.sign()
function signedIntegerToString(int) {
  switch (Math.sign(int)) {
    case 0:
      return '0';
      break;
    case -1:
      return '-' + integerToString(-int);
      break;
    case 1:
      return '+' + integerToString(int);  
  }
}


// good student solution
let signedIntegerToString = (num) => (num < 0 ? '-' + integerToString(Math.abs(num)) : integerToString(num));

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");