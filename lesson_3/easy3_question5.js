// The following function unnecessarily uses two return statements to return boolean values. 
// Can you rewrite this function so it only has one return statement 
// and does not explicitly use either true or false?
// Try to come up with at least two different solutions.


function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid2(color) {
  return (color === "blue" || color === "green");
}

let isColorValid3 = color => color === "blue" || color === "green";


console.log(isColorValid('blue'));
console.log(isColorValid2('blue'));
console.log(isColorValid3('blue'));

// another launch solution using includes
const isColorValid = color => ["blue", "green"].includes(color);