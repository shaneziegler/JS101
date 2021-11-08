// kata

function findOdd(A) {
  let seen = {};

  A.forEach(elm => {
    if (elm in seen) {
      seen[elm] += 1;
    } else {
      seen[elm] = 1;
    }
  });

  return Number(Object.entries(seen).filter(elm => elm[1] % 2 === 1).pop()[0]);
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

// Codewars trick solution
// uses XOR to have bits or paired number zero themselves out.  Only works when there is 1 single odd value we are looking for.

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);