let numbers = [3, 9, 8, 2, 4, 6, 7, 5, 1];

function onlyOdds(nums) {
  nums.forEach( (num, idx) => {
    if ( num % 2 !== 0) {
      nums.splice(idx, 1);
    }
  })
  return nums;
}

onlyOdds(numbers);

The code returns the array `[ 3, 4, 6, 8 ]`.
This code shows the unwanted side effects that happen when you mutate the array being iterated over in a .forEach method.

Line 1 intializes and assigns an array to the variable `numbers`.  Line 12 invokes the onlyOdds() function and passes the `numbers` array as the arguement.
The first line of the function performs a forEach on the passed in nums array with a 




primitive definition 

/*
forEach() is used to iterate through an array and pass each element to the callback function as an argument--but crucially, forEach does not use the return value of the callback function and always returns undefined


forEach -verbose

`array.prototype.forEach()`: is an array iteration method which is called directly on an array and executes a callbackFn for each element in the calling array. `forEach()` is functionally equivalent to a `for` or `while` loop but requires no start or end conditions.  `forEach()` can only cause side effects as it cannot pass an explicit return value and will always return `undefined`.  **This method does not mutate the caller.**

---

/*
forEach() is used to iterate through an array and perform an action on each element. It takes a callback function as an argument and passes each element to the callback function as an argument--but crucially, forEach does not use the return value of the callback function and always returns undefined


forEach -verbose

`array.prototype.forEach()`: is an array iteration method which is called directly on an array and executes a callbackFn, passing each element of the calling array to the callbackFn as an argument. `forEach()` is functionally equivalent to a `for` or `while` loop but requires no start or end conditions.  `forEach()` should be used to cause side effects as it cannot pass an explicit return value and will always return `undefined`.  **This method does not mutate the caller, however, the callbackFn may mutate the caller.**

---


What will the following expressions return?

A) 'b' > 'a'

B) [] + true;

C) '' + undefined

D) [[]] + {}
A) Returns true. Both strings are coerced to their UTF-16 code points and then compared. String value b has a UTF-16 code point of 98 and string value a has a UTF-16 code point of 97.

B) Returns the string 'true'. The empty array [] is coerced to an empty string and the boolean true gets concatenated to the string "true".

C) Returns the string 'undefined'. The empty string '' is concatenated with undefined.

D) Returns the string '[object Object]'. The empty nested array [[]] is coerced to an empty string '' and the plain object {} is coerced to the string '[object Object]'.


** Array [] - when compared to a string, is coerced to the empty string ''

let something = []; // line 1
let somethingElse = ''; // line 2

if (something === somethingElse) { // line 4
  console.log("TV");               // line 5
} else if (something == somethingElse) { // line 6
  console.log("Radio");                   // line 7
} else { // line 8
  console.log("Other"); // line 9
} // line 10

/*Alex
This code will log 'Radio' and demonstrates the difference between strict and loose equality operators. The strict equality operator compares by type and since `something` is assigned to an array and `somethingElse` is assigned to a string, this will evaluate as false and proceed to the next condition of the if-else block. The loose equality operator, however, will coerce the array to a string before comparing for equality . The empty array that `something` points to will be coerced to an empty string for purposes of comparison, which will evaluate as true when compared with the empty string assigned to `somethingElse', therefore executing the if-else branch of the block and logging 'Radio' to the console.

/* shane
The variable `something` is initialized and assigned to an empty array `[]`. The variable `somethingElse` is initialized and assigned to an empty string value ``.  `Radio` is logged to the console on line 7, because both '""' and `[]` coerce to to the boolean value `false`, and are considered equal when using the loose equality comparison operator.  The concept show here is strict vs loose equality.  The code does not log `TV`, because the strict equality operator on line 4, require both the value and data types to the same.
*/

/*
Jeff
Line 10 prints: 'Radio'

The concept being shown is `loose equality` vs `strict equality`.  Line 10 prints 'Radio' because of `loose equality`.

The snippet contains two variables, one an empty `array` and the other an empty `string`. These two values are being compared in a series of conditionals using an `if...else if...else` statement. In the first condition, if the two values are `strictly equal` the code should print 'TV'.  Strict equality requires both the `value` and `data type` to be the same.  And because 1 value is an `array`, which means it is stored by reference,  that actually goes a step further and would require that both variables reference the **same** array to be strictly equal.  Therefore, these values are not and the if condition is skipped.

The second condition says if the values are `loosely equal`, which means equal in value but not necessarily in `data type`, print 'Radio'.  An empty string and an empty array both `implicity coerce` to falsy values.  Therefore they are considered 'equal values' and the code prints 'Radio'
*/


// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?





let pets = ['dragon', 'turtle'];

let newPets = pets;

pets = [];

console.log(newPets);

/*
Alex
The code will log ['dragon', 'turtle']. This is because of the concept of variables as pointers. While primitive values are essentially stored in the same place in memory as the variables they are assigned to, variables assigned to objects instead store a pointer or reference to the object as opposed to the object itself. The object has its own place in memory and the variable stores a pointer to that location. This has significant implications: if two variables are assigned to the same object--that is, they share a reference or pointer to the same object, mutating one variable will affect the other, because you are actually mutating the shared object they both point to. On line 3, the variable `newPets` is declared and initialized to the reference or pointer of `pets`. At this point, both variables share a pointer to the same object; however, on line 5, `pets` is reassigned to point to an empty array and no longer points to the initial object that both variables shared. This does not change the fact that 'newPets` still points to that initial array, which will be logged on line 7.


Jeff
the code logs [ 'dragon', 'turtle' ] to the console

the concepts being shown here **variable reassignment** and **printing**. 
This is possible because both `pets` and `newPets` are declared with the keyword `let` so their values are re-assignable. 

- on 1 one we declare a variable `pets` with the keyword `let` and assign it an array.
- on line 3, we assign the current value of `pets` to a new variable `newPets` also declared with `let`. 
- on line 5, we reassign pets to an empty array.  This does not destroy the orginal array assigned to `pets`, it simply changes the array that `pets` references.
- on line 7, we invoke the `console.log()` method which prints the value of `newPets` to the console. 

/* shane
The variable `pets` is initialized and assigned to an array `[ 'dragon', 'turtle' ]`.  The variable `newPets` is initialized and assigned to point to the variable `pets`.  On line 40, pets is reassigned to an empty array.  `newPets` is logged to the console, which outputs `[ 'dragon', 'turtle' ]`.  The concept shown here is variables as pointers.  Even when `pets` is set to an empty array, newPets still points to the original `pets` array object in memory.
*/


// ### When do we say that a function has side effects? Give an example to demonstrate it.

// ### What are the three ways to define a function in JS? Give an example for each.
