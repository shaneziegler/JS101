// function validParentheses(parens) {
//   let openParens = 0;

//   for (let idx = 0; idx < parens.length; idx += 1) {
//     if (parens[idx] === '(') {
//       openParens += 1;
//     } else {
//       openParens -= 1;
//     }
//     if (openParens < 0) {
//       return false;
//     }
//   }

//   return openParens === 0;
// }

debugger;
validParentheses(')(');
// console.log(validParentheses( "()" )) // true
// console.log(validParentheses("(())((()())())")) // true
// console.log(validParentheses("((())))(")) // false
// console.log(validParentheses("((())))(()")) // false


// function validParentheses(str) {
//   return (str.split('').map(p => p === '(' ? 1 : -1).reduce((a, b) => {
//     if (a + b < 0) {
//       return Number.NEGATIVE_INFINITY;
//     } else {
//       return a + b;
//     }
//   }, 0)) === 0;
// }

function validParentheses(str) {
  return (str.split('').map(p => p === '(' ? 1 : -1).reduce((a, b) => a + b < 0 ? Number.NEGATIVE_INFINITY : a + b, 0)) === 0;
}