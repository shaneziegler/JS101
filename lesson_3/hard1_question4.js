function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

isDotSeparatedIpAddress('192.1.1.1');
isDotSeparatedIpAddress('255.255.255.255');
isDotSeparatedIpAddress('0.0.0.0');
isDotSeparatedIpAddress('10.300.1.1');
isDotSeparatedIpAddress('128.0.0');
isDotSeparatedIpAddress('128.1.1.1.1');

