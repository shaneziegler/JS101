// JS101
// Easy 2
// Square an argument

// Create a function that takes two arguments, multiplies them together, and returns the result.

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

const square = arg => multiply(arg, arg);

console.log(square(5));
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square(5));
console.log(square(-8));