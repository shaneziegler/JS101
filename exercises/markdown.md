let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);


On line 1, the global variable `greeting` is declared and initialized to the string value `Hello`.  On line 3, an infinite loop is started.  On line 4, the global variable `greeting` is reassigned to the string value `Hi`.  On line 5, the program encounters a `break` statement, which aborts the infinite loop and program execution resumes at the closing curly bracket on line 6.  On line 8, `Hi` is logged to the console.  The concepts illustrated in this code are global variable scope and variable reassignment.

Lines 3 to 6 define a loop that will execute forever, unless something happens to end the loop. 

When the loop begins, it first reassigns the greeting global variable to 'Hi' on line 4. The next line, break, causes the loop to end, with execution resuming after line 6. 

Finally, on line 8, console.log is called with the value of the variable greeting passed to it as an argument. Since greeting is now assigned to 'Hi', that is what gets output. 

This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.


The globally scoped variable `greeting` is declared and initialized to the value `Hello`.

Lines 3 to 6 define a loop that will execute forever, unless something happens to terminate the execution of the loop.

On line 5, the program encounters a `break` statement, which ends the loop and then program execution resumes after the closing curly bracket on line 6.



The destructive method sort() mutates the calling array by sorting the elements in place and returns a reference to the sorted array. The default sort order is ascending, based on temporarily coercing the array elements into strings, then comparing their values against the UTF-16 code point values.
The array elements stay thier original data type though.


The array iterator method filter() is used for selection of array elements, it creates a new array and iterates over the elements in the array on which it was invoked, one by one, in sequential order.  The method gets passed a callback function as it's argument, which then gets passed each element from the calling array.  If the callback function returns a `truthy` value, then that element is added to the new array.  The filter() method returns that new array of elements which were found to be `truthy`. The filter() method is non-destructive and does not mutate the calling array.


The array iterator method `filter()` is used for selection of array elements, it creates a new array and iterates over the elements in the array on which it was invoked, one by one, in sequential order.  The method gets passed a callback function as it's argument, which then gets passed each element from the calling array.  If the callback function returns a `truthy` value, then that element is added to the new array.  The `filter()` method returns that new array of elements which were found to be `truthy`. The `filter()` method is non-destructive and does not mutate the calling array.


This code demonstrates function composition.  Function composition is when a function is passed as an argument to another function and returns a value to be used in that function.

This code demonstrates that functions create a new scope.  In Javascript we have global scope and local scope.  Local scope come in two forms:  function scope and block scope.