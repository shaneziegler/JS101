// xor configuration!
//
// write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. 
// Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.


function xor(arg1, arg2) {
  return !!((!arg1 && arg2) || (arg1 && !arg2));
}

console.log(xor(true, true));  // false
console.log(xor(false, false));  // false
console.log(xor(true, false));  // true
console.log(xor(false, true)); // true
console.log('');
console.log(xor(1,0));
console.log(xor(0,1));
console.log(xor(0,0));
console.log('');
console.log(xor(1,1));
console.log(xor(5,0));
console.log('');
console.log(xor(5,false));
console.log(xor(0,true));
console.log(xor(1,false));
console.log('');
console.log(xor(false,1));