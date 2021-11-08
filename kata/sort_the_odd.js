// kata

function sortArray(arr) {
  let odd = arr.filter(elm => elm % 2 === 1).sort((a,b) => a - b);
  console.log(odd);
  return arr.map(elm => (elm % 2 === 0) ? elm : odd.shift());
}

// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// console.log(sortArray([]));
console.log(sortArray([9, -8, 7, 6, 5, 4, 3, 2, -1, 0]));