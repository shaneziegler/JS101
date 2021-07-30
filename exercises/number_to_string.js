// Js101
// Easy 2
// convert a number to a string

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

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
