// JS 101
// Interpretive Problem Solving
// Seing Stars

// Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function.
//  The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

star(7);
// logs
// *  *  *  - 2 spaces
//  * * *  - 1 space
//   *** - 0 spaces
// *******
//   ***
//  * * *
// *  *  *

star(9);

function star(num) {
  if (num < 7 || num % 2 !== 1) return "Invalid input";
  let rows = (num - 1) / 2;
  let rowCount = rows;

  while (rowCount > 0) {
    console.log(`${' '.repeat(rows - rowCount)}*${' '.repeat(rowCount - 1)}*${' '.repeat(rowCount - 1)}*`);
    rowCount -= 1;
  }
  console.log('*'.repeat(num));

  rowCount = 1;
  while (rowCount <= rows) {
    console.log(`${' '.repeat(rows - rowCount)}*${' '.repeat(rowCount - 1)}*${' '.repeat(rowCount - 1)}*`);
    rowCount += 1;
  }
}