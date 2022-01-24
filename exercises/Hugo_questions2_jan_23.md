let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

This code outputs `Hi` to the screen.

On line 1, the global variable `greeting` is declared and initialized to the string `Hello`.  Lines 3 to 6 define a loop that will execute forever, unless something happens to terminate the execution of the loop.  Once the loop begins, on line 4, the global variable `greeting` is re-assigned to the string `Hi`.  On line 5, the program encounters a `break` statement, which ends the loop, and then program execution resumes after the closing curly bracket on line 6.  On line 8, the `console.log` method is invoked with the value held by the variable `greeting` passed as an argument.  `Hi` gets output to the screen, since that is what the global variable `greeting` is now assigned.  This code demonstrates Javascript's variable scoping rules, where variables declared outside of the block scope are available within the block.  A variable's scope is determined by where in the program the variable is declared, the `greeting` variable is available in the everywhere in this code, since it is declared in the most outer/global scope.


Lines  to  define a loop that will execute forever, unless something happens to terminate the execution of the loop.

zre