// kata

//Give me  diamond 

function diamond(n) {
  if ((n <= 0) || (n % 2 === 0)) return null;
  let spaces = Math.floor(n / 2);
  let strStart = '';
  let strEnd = '';
  for (let i = 1; i <= n; i += 2) {
    if (i !== n) {
      strStart = strStart + ' '.repeat(spaces) + '*'.repeat(i) + '\n';
      strEnd = ' '.repeat(spaces) + '*'.repeat(i) + '\n' +  strEnd;
      spaces -= 1;
    } else {
      strStart = strStart + '*'.repeat(i) + '\n';
    }
  }
  // console.log(strStart + strEnd);
  return strStart + strEnd;
}

diamond(3);
