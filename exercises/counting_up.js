// js101
//easy 6
// Counting Up

// Write a function that takes an integer argument and returns an array containing all integers 
// between 1 and the argument (inclusive), in ascending order.

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

function sequence(num) {
  return [...Array(num).keys()].map(val => val + 1);  
}

// another way just using map without having to use keys
function sequence(num) {
  return [...Array(num)].map((_, idx) => idx + 1);
}

