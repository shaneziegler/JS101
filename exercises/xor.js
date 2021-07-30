// JS101
// Xor
// Easy 2

// The || operator returns a truthy value if either or both of its operands are truthy,
// a falsey value if both operands are falsey. 
// The && operator returns a truthy value if both of its operands are truthy, 
// and a falsey value if either operand is falsey. This works great until you need only one, 
// but not both, of two conditions to be truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, 
// and returns true if exactly one of its arguments is truthy, false otherwise.
// Note that we are looking for a boolean result  

function xor(arg1, arg2) {
  return (!!arg1 || !!arg2) && !(!!arg1 && !!arg2);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// launch solution

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

// great student solution
let xor = (a, b) => !!a !== !!b;