This code demonstrates the concept of truthiness.  Truthiness allows the use of non-boolean data types in conditions, comparisons, and other operations that normally expect a boolean `true` or `false` value.  Truthiness uses implicit coercion to cause an expression to be evaluated as `true` or `false`.  Values/expressions that can be coerced to evaluate to `true` are called `truthy`, while values/expressions that can be coerced to evalute to `false` are called `falsey`.

Falsy values
false
undefined
null
0 - all forms
"" (an empty string)
NaN

The array iterator method `filter()` is used for selection of array elements, first it creates a new array and then iterates over the elements in the array on which it was invoked, one by one, in sequential order.  The method gets passed a callback function as it's argument, which then gets passed each element from the calling array.  If the callback function returns a `truthy` value, then that element is added to the new array.  The `filter()` method returns that new array of elements which were found to be `truthy`, if no elements are found to be `truthy` then an empty array is returned. The `filter()` method is non-destructive and does not mutate the calling array.

The array iterator method `map()` is used for transformation of array elements, first it creates a new array and then iterates over the elements in the array on which it was invoked, one by one, in sequential order.  The method gets passed a callback function as it's argument, which then gets passed each element from the calling array.  The callback function performs a transformation on each element passed to it and the returns that value, which is put into the new array.  The `map()` method returns the new array of transformed elements and has the same number of elements as the orginal array. The `map()` method is non-destructive and does not mutate the calling array.

The method `forEach()` iterates over the elements in the array which it is invoked on, one by one, in sequential order. It uses a callback function which gets passed in as an argument to the method, and then passes each array element to that callback function for each iteration.   `forEach()` always returns `undefined`.  The `forEach()` method is non-destructive and does not mutate the calling array directly, however, code in it's callback function could be written to mutate the calling array.


says "holds for primitive values" instead of "contains"
"inside the body of the function"
say "passing the string `hello`" or "passing the value of the variable `greeting`"




Side effects are operations performed inside a function that have an effect outside of the function's local scope.  The five side effect taught in Launch School are:
1.  Mutating an object/array that originated in an outer scope.
2.  Any kind of input/output, like printing to the console or reading from a file.


Objects are another common collection data structure that, instead of using an integer-based index, uses key-value pairs, where the key is a string and the value can be any JavaScript value. That allows for a more expansive and descriptive collection of elements. Object keys are also called properties.
Note that there are two ways of referencing an element in an object. The first one is called the dot notation of object property access and the second one is the bracket notation. In the above example, we use the dot notation to access the value of the 'fruit' key and the bracket notation to access the value of the 'vegetable' key. It is important to note that the [0] part of obj['vegetable'][0] and [3] in obj.fruit[3] in the above example is string element reference. The string 'carrot' is returned by object['vegetable'] and [0] is used to access the first letter of that value.
