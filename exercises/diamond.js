// JS101
// Interpretive Problem Solving
// Diamonds

// Write a function that displays a four-pointed diamond in an nxn grid, 
// where n is an odd integer supplied as an argument to the function. 
// You may assume that the argument will always be an odd integer.

diamond(9);
// logs
    * 4 
   *** 3
  ***** 2
 ******* 1
********* 0
 *******
  *****
   ***
    *

function diamond(num) {
  for (let i = 1; i <= num; i += 2) {
    console.log(' '.repeat(Math.floor((num - i) / 2)) + '*'.repeat(i));
  }
  for (let i = num - 2; i > 0; i -= 2) {
    console.log(' '.repeat(Math.floor((num - i) / 2)) + '*'.repeat(i));
  }
}