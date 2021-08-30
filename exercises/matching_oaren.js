// js101
// easy 6
// Matching Parentheses?

// Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced,
// false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
// Note that balanced pairs must each start with a (, not a ).

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

function isBalanced(str) {
  let leftParenCount = 0;
  let parenArr = str.split('');
  for (let idx = 0; idx < parenArr.length; idx++) {
    if (parenArr[idx] === '(') {
      leftParenCount += 1;
    } else if (parenArr[idx] === ')') {
      leftParenCount -= 1;
    }
    if (leftParenCount < 0) return false;
  }

  return (leftParenCount === 0);
}
