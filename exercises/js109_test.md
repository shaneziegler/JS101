let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}



This code will output:
`neigh`
`tweet tweet`
`*cricket*`
 
This code demonstrates the use of a `switch` statement and what happens if you don't use `break` statements in `case` clauses.
 
The `switch` statement evaluates an expression once, then compares the result with the values of its `case` clauses.  If there is a matching `case` statement, then the associated block of code is executed, otherwise the `default` code block is executed.  A `break` statement is used to exit the `switch` block.
 
On line 1, the globally scoped variable `animal` is declared and initialized to the string `horse`.  On line 3, the switch statement is executed with the variable `animal` for its expression.  On line 8, the case clause of `horse` is found to equal the value that the variable `animal` holds, then line 9 is executed which outputs `neigh` to the screen.  There is no `break` statement after, so code execution continues with lines 10-11 that outputs `tweet tweet` to the screen and then finally lines 12-13 which outputs `*cricket*` the screen.



Question 3: Take a look at the code below.  What it will log to the console and describe the code.
