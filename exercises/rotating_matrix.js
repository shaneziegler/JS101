// js101
// advanced 1
// rotating matrix
// rotate matrix 90 degrees
// just like the prev tranform matrix stuff
// just need to change:
// from: newMatrix[y][x] = matrix[x][y];
// to: newMatrix[y][x] = matrix[(matrix.length - 1) - x][y];

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = rotate90(matrix);

console.log(matrix);
console.log(newMatrix);


// [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
// [[3, 4, 1], [9, 7, 5], [6, 2, 8]]

// 0, 0 = 2, 0
// 0, 1 = 1, 0
// 0, 2 = 0, 0

// 1, 0 = 2, 1
// 1, 1 = 1, 1
// 1, 2 = 0, 1

// 2, 0 = 2, 2
// 2, 1 = 1, 2
// 2, 2 = 0, 2

function rotate90(matrix) {
  let newMatrix = [];

  for (let y = 0; y < matrix[0].length; y++) {
    newMatrix.push([]);
    for (let x = 0; x < matrix.length; x++) {
      newMatrix[y][x] = matrix[(matrix.length - 1) - x][y];
    }
  }
  return newMatrix;
}

// [[1, 5], [4, 7], [3, 9]]
// [[3, 4, 1], [9, 7, 5]]

// 0, 0 = 2, 0
// 0, 1 = 1, 0
// 0, 2 = 0, 0

// 1, 0 = 2, 1
// 1, 1 = 1, 1
// 1, 2 = 0, 1


let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];


// [[3, 7, 4, 2], [5, 1, 0, 8]]
// [[5, 3], [1, 7], [0, 4], [8, 2]]

