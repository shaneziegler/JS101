let obj = { '3': -9, '4': 0 };

let arr2 = Object.entries(obj);
console.log(obj);
console.log(arr2);
console.log('\n');

let doMove = arr2.reduce((prev, curr) => {
  console.log('\nAcc: ' + prev + ' - Elm:' + curr + '  -  Elm[1]:' + curr[1] + '  -  Elm[0]:' + curr[0] + '  -  Obj[acc]' + obj[prev]);
  if (prev[1] > curr[1]) {
    return prev;
  } else {
    return curr;
  }
}, Number.NEGATIVE_INFINITY);

console.log('picked:' + doMove);