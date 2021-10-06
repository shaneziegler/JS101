// JS101
// Advanced 1
// Egyptian Fractions

// Write two functions: one that takes a Rational number as an argument,
//  and returns an Array of the denominators that are part of an Egyptian Fraction representation of the number,
//  and another that takes an Array of numbers in the same format, and calculates the resulting Rational number.

// console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
// console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
// console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

// console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
// console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
// console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
// console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
// console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
// console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
// console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
// console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3

let Fraction = require('fraction.js');

function egyptian (inFraction) {
  let fracArr = [];
  let currDenominator = 1;
  while (true) {
    let currFrac = new Fraction(1, currDenominator);
    if (currFrac <= inFraction) {
      fracArr.push(currDenominator);
      inFraction = new Fraction(inFraction - currFrac);
      if (Number(inFraction) === 0) break;
    }
    currDenominator += 1;
  }
  return fracArr;
}


// console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(5, 8)));
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

function unegyptian (arr) {

}
