// js101
// advanced 1
// transpose 3x3 matrix

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
  newMatrix.push([matrix[0][0], matrix[1][0], matrix[2][0]]);
  newMatrix.push([matrix[0][1], matrix[1][1], matrix[2][1]]);
  newMatrix.push([matrix[0][2], matrix[1][2], matrix[2][2]]);
  return newMatrix;
}