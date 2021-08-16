let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let aTotal = a.reduce((acc, elm) => acc + elm);
  let bTotal = b.reduce((acc, elm) => acc + elm);
  return aTotal - bTotal;
});