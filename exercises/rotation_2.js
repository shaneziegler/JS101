// JS101
// Medium 1
// Rotation Part 2


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

function rotateRightmostDigits(num, count) {
  let leftStr = String(num).slice(0, String(num).length - count);
  let rightArr = String(num).slice(String(num).length - count).split('');
  rightArr.push(rightArr.shift());
  let rotatedStr = rightArr.join('');
  return leftStr + rotatedStr;
}

// redo using function from rotation 1

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr.slice(0,1));
}

// use just first element instead
function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

// rewrite using function from rotation 1

function rotateRightmostDigits(num, count) {
  let arr = Array.from(String(num));
  return arr.slice(0, arr.length - count).concat(rotateArray(arr.slice(arr.length - count))).join('');
}

// LS solution
function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

