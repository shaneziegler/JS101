

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2], [0,0,0], [9,9,9]];
let s = scores.sort((a, b) => a.reduce((c, d) => c + d) - b.reduce((x, y) => x + y));
console.log(s);
