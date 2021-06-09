function xor(arg1, arg2) {
    if (arg1 == true) or (arg2 == true) {

    } else {
        return false;
    }
}



// Write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. 
// Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

console.log(xor(true,false));

console.log(xor(true,true));

console.log(xor(false,false));

console.log(xor(false,true));