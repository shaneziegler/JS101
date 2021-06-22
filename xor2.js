function xor(arg1, arg2) {
  return (arg1 || arg2) && (!arg1 || !arg2);
}

console.log(xor(true, false));
console.log(xor(false, false));
console.log(xor(true, true));
console.log(xor(false, true));

console.log(xor(5, true));
console.log(xor(false, 5));
console.log(xor(5, false));
console.log(xor('', true));

console.log(xor('', ''));
console.log(xor(0, true));
console.log(xor(null, true));
console.log(xor(null, null));

console.log(xor(5, 0));
