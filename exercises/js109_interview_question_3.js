// Problem Description
// Given a divisor and a bound, find the largest number N such that:
// N is divisible by the divisor
// N is less than or equal to the bound
// N is greater than 0.

// N is remain

console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);
console.log(maxMultiple(7, 7) === 7);

// if  bound < 1, return -1
// while (true)

// if bound % divisor === 0 return bound
// if bound < 1 return -1
// bound -= 1

function maxMultiple (divisor, bound) {
  if (bound < 1) return -1;
  while (true) {
    if (bound % divisor === 0) return bound;
    if (bound < 1) return -1;
    bound -= 1;
  }
}

function maxMultiple (divisor, bound) {
  while (bound >= divisor) {
    if (bound % divisor === 0) {
      return bound;
    } else {
      bound -= 1;
    }
  }
}