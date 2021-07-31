// JS101
// Easy 3
// Stringy Strings

function stringy(len) {
  let result = '';
  for (let i = 1; i <= len; i++) {
    result += i % 2;
  }
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// Good student solution
function stringy(num) {
  if (num % 2 == 0) {
    return '10'.repeat(num / 2);
  } else {
    return '10'.repeat((num - 1) / 2) + '1';
  }
}

// Another
const stringy = length => ''.padStart(length, '10');