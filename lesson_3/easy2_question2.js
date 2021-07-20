// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Reverse array using slice() without mutating org array
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice().reverse();
console.log(newNumbers);


// If compareFunction(a, b) returns a value > than 0, sort b before a.
// If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order

// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;  // Do nothing
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;  // Swap order
//   }
//   // a must be equal to b
//   return 0;  // Do nothing
// }


// Reverse array using spread without mutating org array
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [...numbers].reverse();
console.log(newNumbers);

// Sort array without mutating orginal using spread syntax
let numbers = [3, 4, 2, 1, 5];
let newNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); 
console.log(newNumbers);

//forEach
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [];
numbers.forEach(element => newNumbers.push(element));
newNumbers.reverse();
console.log(newNumbers);

//forEach
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [];
numbers.forEach(element => newNumbers.unshift(element));
console.log(newNumbers);