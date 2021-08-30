// js101
// easy 6
// Always Return Negative

// Write a function that takes a number as an argument.
//  If the argument is a positive number, return the negative of that number. 
//  If the argument is a negative number, return it as-is.

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

function negative(num) {
  return num < 0 ? num : num * -1;
}

// Ls solution
function negative(number) {
  return Math.abs(number) * -1;
}
