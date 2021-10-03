// js101
// advanced 1
// transpose MxN Matrix
// my old transpose_matrix_2.js already did this

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);
console.log(matrix);

// [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transpose(matrix) {
  let newMatrix = [];

  for (let y = 0; y < matrix[0].length; y++) {
    newMatrix.push([]);
    for (let x = 0; x < matrix.length; x++) {
      newMatrix[y][x] = matrix[x][y];
    }
  }
  return newMatrix;
}

// in nested array 3x3
// out new nested array 3x3
// ds array

// create new empty unested array
// loop based on length of first element in array [1,4,3].length = 3 - use y as the counter
// -- insert empty array into transformed array
// -- loop based on the numbers of entries in the outer array - [[1, 4, 3], [5, 7, 9], [8, 2, 6]].length = 3 - use x as the counter
// -- insert value from current matrix[x][y] into transformed [y][x]
// return transformed array

const matrix3 = [
  [1],
  [4],
  [3],[9]
];


