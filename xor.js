function xor_org(arg1, arg2) {
    if ((arg1 == true) || (arg2 == true)) {
        if (arg1 != true && arg2 == true) {
            return true;
        } else if (arg1 == true && arg2 != true) {
              return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function xor2(arg1, arg2) {
    return ((arg1 != true && arg2 == true) || (arg1 == true && arg2 != true))
}

function xor(arg1, arg2) {
    return ((!arg1 && arg2) || (arg1 && !arg2))
}
// Write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. 
// Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

function xor_notmine(value1, value2) {
    return ((value1 && !value2) || (value2 && !value1));
  }

console.log(xor(true,false));

console.log(xor(true,true));

console.log(xor(false,false));

console.log(xor(false,true));