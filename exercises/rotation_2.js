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
