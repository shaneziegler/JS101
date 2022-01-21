- variable scope
- mutation



let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);

console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3, 4 ]

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1 = arr1.concat([4]);

console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3]

These code snippets give different results because:



On line 1, The globally scoped variable `arr1` is declared and initialized to the array `[1,2,3,4]`.  On line 2, the globally scoped variable `arr2` is declared and initialized to point to the array variable `arr2`. 

In the first example, on line 3, the array method `push()` is invoked on the `arr1` array and passed value `4` as it's argument.  Since both `arr1` and `arr2` point to the same array object, both out the same result.

In the second example, on line 3, the array method `concat()` is invoked on the `arr1` array and `arr1` is re-assigned to it's result.  `arr1` now points to a different array than `arr2`.  This code demonstrates variable re-assignment.  After a variable has been assigned, it can be re-assigned. The variable can be made to refer to a new value or object, but we are not mutating the original value, we are giving the variable a completely new value.



The method `forEach()` iterates over the elements in the array which it is invoked on, one by one, in sequential order. It uses a callback function which gets passed in as an argument to the method, and then passes each array element to that callback function for each iteration.   `forEach()` always returns `undefined`.  The `forEach()` method is non-destructive and does not mutate the calling array directly, however, code in it's callback function could be written to mutate the calling array.



The array iterator method `filter()` is used for selection of array elements, it creates a new array and iterates over the elements in the array on which it was invoked, one by one, in sequential order.  The method gets passed a callback function as it's argument, which then gets passed each element from the calling array.  If the callback function returns a `truthy` value, then that element is added to the new array.  The `filter()` method returns that new array of elements which were found to be `truthy`. The `filter()` method is non-destructive and does not mutate the calling array.





Hugo  10:06 AM
Ok, here is a zoom link: https://us05web.zoom.us/j/82615072672?pwd=YWRsYUk3QkZLNy8wVEtpQ051RVVkdz09

Hugo  10:12 AM
if (true) {
  let myValue = 20;
}

console.log(myValue);
10:13
What does this code log to the console and why

Shane Ziegler (JS 109)  10:19 AM
Lines 1 to 3 define a block that will always execute.  The locally block scoped variable `myValue` is declared and initialized to the value `20`.  On line 5, the `console.log` method is invoked with `myValue` passed as an argument.  This causes a ReferenceError, since the variable `myValue` is not currently in scope.  This code demonstrates Javascript’s variable scoping rules, where variables declared inside of the block scope are not available outside the block.  A variable’s scope is determined by where in the program the variable is declared.

Hugo  10:22 AM
This code will log a ReferenceError to the screen. The reason for this behavior is that when the code reach the if statement, the condition of the if blocks execute and the variable myValue get declared and initialized within the local scope of the  if statement. So when console.log is invoke on line 5 it doesn't have access to the value held by myValue
10:23
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);

console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3, 4 ]
10:24
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1 = arr1.concat([4]);

console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3]
10:28
https://launchschool.com/lessons/64655364/assignments/e16c1f23

Hugo  10:33 AM
On the two code snippets above, we have two global variable declaration on line 1 and line 2. On line 1, the variable arr1 gets declared and assigned to an array with 3 element. On line 2, the variable arr2 gets declared and assigned to the value of arr1.
On line 3 of the first code snippet, the push method is called on arr1 to add an element to the end of the array, push does so by mutating it's caller. In other words, arr1 gets reassigned to its value plus the additional value provided to the push function.
On line 3 of the second code snippet, the variable arr1 gets reassigned to its current value plus the return value of calling the concat method on its current value to concatenate its current array with the one passed to the concat method.
When the console.log method is invoke on line 5 and line 6 of both code snippet, arr2 is different from the original value on the first code snippet but not on the second. That is because both concat and push are two different methods. push mutates its caller whereas concat creates a new array.

Shane Ziegler (JS 109)  10:40 AM
On line 1, The globally scoped variable `arr1` is declared and initialized to the array `[1,2,3,4]`.  On line 2, the globally scoped variable `arr2` is declared and initialized to point to the array variable `arr2`.
In the first example, on line 3, the array method `push()` is invoked on the `arr1` array and passed value `4` as it’s argument.  Since both `arr1` and `arr2` point to the same array object, both out the same result.
In the second example, on line 3, the array method `concat()` is invoked on the `arr1` array and `arr1` is re-assigned to it’s result.  `arr1` now points to a different array than `arr2`.  This code demonstrates variable re-assignment.  After a variable has been assigned, it can be re-assigned. The variable can be made to refer to a new value or object, but we are not mutating the original value, we are giving the variable a completely new value.
New

Hugo  10:42 AM
On both of these examples a variable gets declared and initialized to an array with 3 elements. On the 3rd line of the first example, the push method is called on arr1 to add an element to the end of the array whereas on the 3rd line of the second example the concat method is called on the arr1 to add an element to the end of the array. Arrays being objects, they can be mutated. The push method mutates its caller whereas concat does not and for this reason the array is being returned unchanged

Shane Ziegler (JS 109)  10:50 AM
The method `forEach()` iterates over the elements in the array which it is invoked on, one by one, in sequential order. It uses a callback function which gets passed in as an argument to the method, and then passes each array element to that callback function for each iteration.   `forEach()` always returns `undefined`.  The `forEach()` method is non-destructive and does not mutate the calling array directly, however, code in it’s callback function could be written to mutate the calling array.
10:51
The array iterator method `filter()` is used for selection of array elements, it creates a new array and iterates over the elements in the array on which it was invoked, one by one, in sequential order.  The method gets passed a callback function as it’s argument, which then gets passed each element from the calling array.  If the callback function returns a `truthy` value, then that element is added to the new array.  The `filter()` method returns that new array of elements which were found to be `truthy`. The `filter()` method is non-destructive and does not mutate the calling array.

Hugo  10:52 AM
forEach is a method that works with arrays object. It executes a provided function,the call-back function for each element of the array that is passed to it. ForEach returns undefined
10:53
forEach is a method that iterates over each element of an array. It takes one argument, a callback function that it invokes once and for each element of the array on which it is being called. The callback function invoked by forEach takes one argument, the value of the current element at each iteration of forEach forEach always returns undefined.






function objectHasProperty(object, property) {
  return object[property] ? 1 : 2;
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
};

objectHasProperty(obj, 'something'); // returns 1
objectHasProperty(obj, 'active');    // returns 2
Hugo Robas to Everyone (11:02 AM)
The following function is in an application. The function should return 1 when the named property exists in the specified object, and it should return 2 if the property does not exist. The development team has determined that there is a bug in this code.

Explain precisely why this code isn't functioning correctly. Update the code to show how you would fix it.
Hugo Robas to Everyone (11:04 AM)
The above code works fine but as the development team mentioned there is a bug, the function objectHasProperty doesn't include a guard clause when the object's property is equal to a falsy value.

On the following code snippet:
Hugo Robas to Everyone (11:04 AM)
function objectHasProperty(object, property) {
  return object[property] ? 1 : 2;
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
};

objectHasProperty(obj, 'result') // returns 2
Hugo Robas to Everyone (11:05 AM)
When the objectHasProperty function gets invoked on line 11 and line 12 it returns 2 even-though the properties enabled and result exist. if we look at the function implementation, it takes two arguments, an object and an object property. The function returns the output of the ternary operator. the ternary operator takes the object argument and check if the element reference by the argument property does exist if the return value is truthy, it return 1, 2 otherwise.

Here is how I would fix the code:
Hugo Robas to Everyone (11:05 AM)
function objectHasProperty(object, property) {
  return object.hasOwnProperty(property) ? 1 : 2;
}

objectHasProperty(obj, 'something'); // returns 1
objectHasProperty(obj, 'active'); // returns 2
objectHasProperty(obj, 'result') // returns 1















if (true) {
  let myValue = 20;
}

console.log(myValue);

Lines 1 to 3 define a block that will always execute.  The locally block scoped variable `myValue` is declared and initialized to the value `20`.  On line 5, the `console.log` method is invoked with `myValue` passed as an argument.  This causes a ReferenceError, since the variable `myValue` is not currently in scope.  This code demonstrates Javascript's variable scoping rules, where variables declared inside of the block scope are not available outside the block.  A variable's scope is determined by where in the program the variable is declared.


