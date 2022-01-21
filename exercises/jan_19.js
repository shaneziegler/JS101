
// What does this code return and why?

[1, 2, 3].filter(num => { num < 2 });

// [] because there is no explicit return in the function block.


// Describe the filter method.  Describe the map method.  Describe the forEach method.


//  What does this code output?
function anyNegatives(arr) {
  return arr.forEach(num => { // line 2
  if (num < 0) return true;
  });
}

let numbers = [1, 2, 3, -5, 4];
 
if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}

// The array contains no negatives!
// It returns that because forEach always returns `undefined`, which is falsey.  `undefined` is returned on line 2.  
// The return on line 3 doesn't return from the function, it just exits the block.
// The forEach could be changed into a normal for loop and then it would work as expected.
// Changing the forEach to a .some() method would be the best fix.


 
// What is returned/output on lines 8/9?

let greeting = ["Hello"];
 
const test = arr => {
  arr = arr.push("World!");
  return arr;
}

test(greeting); // line 8 
console.log(greeting); // line 9

// line 8 - 2 because the arr parameter is reassigned inside the function to the new length of the array
// line 9 - [ 'Hello', 'World!' ] - because of pass by reference and the .push() method is destructive and mutates the original object also pointed to by `greeting`


// Does the sum() function have side effects?
let nums = [1, 2, 3];

function sum(numbers) {
  let total = numbers.reduce((acc, num) => acc + num);
  numbers.push(total);
}
 
sum(nums);
console.log(nums);
// Yes, the `nums` array is mutated by the sum() function.

// What about now?
function sum() {
  let numbers = [1, 2, 3];
  let total = numbers.reduce((acc, num) => acc + num);
  numbers.push(total);
  return numbers;
}
 
console.log(sum());
// No - doesn't mutate any outer scope variables

// What about now?
function sum() {
  let numbers = "1, 2, 3";
  let total = numbers.reduce((acc, num) => acc + num);
  numbers.push(total);
  return numbers;
}
 
console.log(sum());
// Yes - numbers.reduce throws an unhandled exception because there isn't a reduce method for strings.

