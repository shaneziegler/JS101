let greeting = ["Hello"];

const test = arr => {
	arr = ["ByeBye"];
	arr.push("World!");
	return arr;
}

test(greeting);
console.log(greeting)

On line 1, the variable `greeting` is declared and initialized to an array of ["Hello"].  Lines 3-7 declare the function `test` which takes one argument.  On line 9, the `test` function is invoked and the array `greeting` is passed-by-reference to it as an argument.  The array `greeting` is passed-by-reference to the parameter `arr`.  At this point, `greeting` and `arr` reference the same array in memory.  On line 4, he parameter `arr` is reassigned to the array `["ByeBye"]` and the object/array `greeting` variable no longer reference the same place in computer memory.  On like 5, the string "World!" is added to the local array arr as an element.  The function returns the array ["ByeBye", "World!"].  On line 10, the `console.log` method is invoked with `greeting` passed as an argument.  `["Hello"]` gets output, since that is what the variable `greeting` is assigned to.  This code demonstrates variable re-assignment.  After a variable has been assigned, it can be re-assigned. The variable can be made to refer to a new value, but we are not mutating the original value, we are giving the variable a completely new value.


maybe built in for .concat and .slice?

