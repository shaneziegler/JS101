let something = []; 
let somethingElse = '';

if (something === somethingElse) { 
  console.log("TV");               
} else if (something == somethingElse) { 
  console.log("Radio");                   
} else { 
  console.log("Other"); 
}

This code example will output `Radio`.

This code demonstrates strict equality vs loose equality.  The strict equality operator `===`, checks whether its two operands are both of the same type and have the same value.  It returns a `boolean` value of `true` or `false`.  For an `object`, it will return `true` only if both operands point to the exact same object in memory.
The loose equality operator `==` uses implicit type coercion to check if its operands are equal.  It returns a `boolean` value of `true` or `false`.  Unlike the strict equality operator, the data types of the operands can be different.

This code demonstrates implicit type coercion, which happens when you perform an operation with values of two different data types and Javascript then automatically coerces the values to have the same type.  How different values get coerced depends on the operation and data types.

On line 1, the variable `something` is declared and initialized to an empty array.  On line 2, the globally scoped variable `somethingElse` is declared and initialized to an empty string.  On line 4, the variables `something` and `somethingElse` are compared using strict equality.  They are not of the same data type, so the result is `false`.  On line 6, the `else if` statement compares `something` and `somethingElse` are compared using loose equality.  Using implicit type coercion, the comparison result is `true`, since `[]` coerces to an empty string in this case and then line 7 is executed.  On line 7, the `console.log` method is invoked with the value of the string `Radio` passed as an argument.  `Radio` gets output.

