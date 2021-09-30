
function threeByThree(inArr) {
  let sumArr = [];

  inArr.forEach(str => {
    let digitsArr = str.split('');
    sumArr.push(digitsArr.reduce((a,b) => Number(a) + Number(b), 0));
  });

  return sumArr.filter(sum => sum % 3 === 0).length >= 3;
}

console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true