// JS101
// Medium 1
// Rotation Part 3

// Take the number 735291 and rotate it by one digit to the left, getting 352917. 
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
// Keep the first two digits fixed in place and rotate again to get 321759. 
// Keep the first three digits fixed in place and rotate again to get 321597. 
// Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
// The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 
// You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

function rotateString(str) {
  return str.slice(1) + str.charAt(0);
}

function rotateRightmostDigits(num, count) {
  let digitStr = String(num);
  return Number(digitStr.slice(0, digitStr.length - count) +
    rotateString(digitStr.slice(digitStr.length - count)));
}

function maxRotation(num) {
  for (let i = 0; i < String(num).length; i++) {
    num = rotateRightmostDigits(num, String(num).length - i);
  }
  return num;
}

// LS Solution
function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}