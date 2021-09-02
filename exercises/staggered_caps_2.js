// js101
// string processing
// staggered caps part 2

// Modify the function from the previous exercise so it ignores non-alphabetic 
// characters when determining whether it should uppercase or lowercase each letter. 
// The non-alphabetic characters should still be included in the return value; 
// they just don't count when toggling the desired case.


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


function staggeredCase(str) {
  let idx = 0;
  return str.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      if (idx % 2 === 0) {
        idx += 1;
        return char.toUpperCase();
      } else {
        idx += 1;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

// more compact student solution using short cicuiting
function staggeredCase(str) {
  const isLetter = /[a-zA-Z]/;
  let toggle = false;

  const staggerLettersOnly = char => {
    return (!isLetter.test(char) || (toggle = !toggle)) ? char.toUpperCase() : char.toLowerCase();
  };

  return [...str].map(staggerLettersOnly).join('');
}