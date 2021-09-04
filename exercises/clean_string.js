function cleanString(str) {
  let parsedStr = '';
  for (let index in str) {
    if (str[index].match(/[A-Za-z]/g)) {
      parsedStr += str[index];
    }
  }
  return parsedStr;
}

cleanString('hello.');
