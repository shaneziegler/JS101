# 109 Written Exam Study Guide

## Concept Overview
01. Declarations, Initialization, Assignment, and Re-Assignment
02. Variable Scope (and shadowing)
03. Primitive Values, Objects, & Type Coercion
04. Object Properties
05. Mutability vs. Immutability vs. Const
06. Loose & Strict Equality
07. Arguments & Return Values
08. Working with Strings
09. Working with Arrays
10. Working with Objects
11. Arrays as Objects
12. Pass-by-Reference vs. Pass-by-Value
13. Variables as Pointers (Call-by-Reference)
14. Truthiness vs. Boolean Values
15. Function Definitions vs. Function Invocations
16. Function Declarations, Function Expressions, and Arrow Functions
17. Implicit Return Values
18. First Class Functions
19. Function Side-Effects
20. Legal vs. Idiomatic Naming Conventions
21. Declarative vs. Imperative Descriptioning

# Canned Concept Definitions


## Scope Example 1: Variable Scope

What does this code do and why?

```js
let b = 2;
function test(a) {
  a = b;
  return a;
}
test(5);
console.log(b);
console.log(a);
```

### Answer:

Line 8 will **return** the number `2`.




## 01. Declarations, Initialization, Assignment, and Re-Assignment

### What is a Variable?
A `variable` or `identifier` is a named area of a program's memory space where the program can store data and can typically be changed.
- variables declared with `let`
- constants declared with `const`
- function names
- function parameters
- class names

### Variable Declaration & Initialization
A variable `declaration` is a statement which asks the JS engine to reserve space for a variable with a particular name.  Often, variables are both `declared` and `initialized` to a value at the same time. If a variable is not explicitly initialized to a value, it will be implicitly initialized to `undefined`. An instruction to simultaneously `declare` and `initialize` a variable is a `statement expression`.

### Assignment Operator
The `assignment operator` is the `=` symbol.  It assigns the right operand as a value to the variable named by the left operand.

### Variable Assignment
All `assignments` have a `return value`. The return value of a variable assignment is the value assigned to the variable (right operand).

### Constants
Constants are declared with the keyword `const` and always require an initial value because their value cannot be changed (`re-assignment` is prohibited).  Attempting to re-assign a constant will throw a `TypeError: Assignment to constant variable`.



## 02. Variable Scope

### Variable Scope
The concept demonstrated here is **variable scope**:, in particular that inner (`child`) scopes **do have access** to outer (parent) scope variables but that outer (`parent`) scopes **do not have** access to inner (child) scope variables. Scope is determined by the location in a program at which a given variable was declared.

### Variable Shadowing
The concept demonstrated here **variable scope**: in particular **variable shadowing**, wherein a *local* (child scope) variable's name shadows a *global* (parent scope) variable of the **same name** thereby making the global variable *inaccessible* within the local scope.

### Undeclared Variables
Undeclared variables (not declared with `let` or `const`) are `hoisted` to the global scope because they technically do not exist in memory until the assignment is executed. Therefore, when the JS engine encounters the assignment and executes it, it is forced to reserve memory in the global scope even if the variable was assigned in a child scope because the child scope is built at the beginning of execution.



## 03. Primitive Values, Objects, & Type Coercion

### What are the Primitive Types in JS?
A `primitive` is an atomic or undivisible value in JS.  These primitive values are said to be `immutable` (unchangeable).  There are seven primitive data `types` as of `ES2015` but we're primarily concerned with the five original types:

- `strings` are an order-dependent list of characters surrounded by single (`' '`) quotes or double (`" "`) quotes.
- `numbers` are any real number including negative, whole, floating point (fractions as decimals), and fixed point (decimal) numbers. Also includes `NaN` (not a number), `0`, `-0`, `infinity`, and `-infinity`.
- `booleans` are representation of an on / off (i.e. true / false) state: JS bools are `true` and `false`.
- `undefined` is the `implicit` absence of value, though it is possible to `explicitly` set a value of `undefined`.
- `null` is the `explicit` absence of value.  It is not possible to implicitly set a `null` value.

***note:***
- *`bigInt` is a new primitive numerical type added as part of the `ES2015` specification which allows an even bigger range of numbers to be represented.*
- *`symbol` is a new primitive type which addresses low level language concerns and was introduced as part of the `ES2015` specification.*

### What is an object?
As a data structure, an `object` is a complex, typically `mutable`, dictionary-like data structure of unordered `properties` which are composed of `keys` and `values` (a.k.a. `key-value pairs`).  Object literals are encapsulated by curly braces `{ }`. However, any data that is not of a primitive type in JS is of the `object` type.  This includes `arrays`, `objects`, and `functions`.

### What is a Literal?
A `literal` is a textual representation in code of a fixed value of any data type. The number `1` is a literal.  The array `['hello', 'world']` is a literal.

### NaN
`NaN` stands for 'Not a Number' and represents an 'illegal mathematical operation' such as dividing by 'hi' (dividing by `0` returns `infinity` in JS).  It's helpful to think of `NaN` as an `error number`.   Interestingly, `NaN`'s `type` is actually a number and also `NaN` is the only value in JS that is not equal to itself.  (It is unique by specification). You can check for `NaN`s using `Number.isNaN()` or `Object.is()` as trying to use the `typeof` operator will return: `number`. D'oh!

### Typeof
`Typeof` is a keyword (`operator`) used to check the `data type` of a value.

### Implicit Coercion
`Implicit Coercion` describes situations where JS automatically changes the `data type` of a value from its original type to a new type.  This occurs when disparate types are used as operands of an arithmetic operation or when non-booliean evaluation occurs in a comparison (conditional operations).  The rules for `implicit coercion` are complex and unintuitive.  For instance, `'true' == true` returns `false` because in this specific case, the boolean `true` is first coerced to the number `1`, and when strings are compared to numbers, strings are coerced to numbers causing `'true'` to be coerced to `NaN`. Since `NaN` is unique by definition, it obviously can't be the same value as `1` and JS returns `false`. In other words...find an evaluation table or, better yet, avoid `implicit coercion` when possible.

### Explicit Coercion

`Explicit Coercion` describes situations where the `data type` of a value is **intentionally** cast to a different type in code.  This is a good way to guard against any unexpected behavior of `implicit coercion` and communicate the intent of your code.



## 04. Object Properties

### What is an Object Property?
`Objects` store an order-independent collection of `key-value pairs` known as `properties`: each property in the object has a name that we call the `key` and an associated `value`.  An object's keys are always `strings`, but the values can be any `data type`, even other objects (including arrays and functions).

### Object Notation
There are two ways to access object `properties` (key-value pairs) in an object, `dot notation` and `bracket notation`.

### Dot Notation
With `dot notation`, we place a dot after the variable that references the object `(.)` followed by a `key name` to specify the property like so: `myObject.foo`, the value of which we want to read, assign, re-assign, or invoke (in the case of a `method`) such as `myObject.foo = 'bar';`. This access method only works with `key names` and cannot be used if the property's key name is assigned to a variable.

### Bracket Notation
With `bracket notation`, we place square braces after the variable that references the object `[]` around the name of the property (`key name`) in quotes like so: `myObject['key']` to access a named property.  In the case of a variable containing a key such as `let key = 'name';` the quotes are omitted (`[key]`) and the value of the variable will be passed in as the property key name: `myObject[key]` will look for a property of `myObject` called `'name'`. Bracket notation is the only way to access object properties using key names assigned to variables.



## 05. Mutability vs. Immutability vs. Const

### Mutability
All objects are inherently `mutable`. `Mutation` occurs when an object is changed permanently such as when a property is added to an object or a `method` (or function) permanently alters the object which invoked the method. This is also known as `mutating the caller` or a `destructive operation`. Because `primitives` are `immutable`, therefore `mutation` only applies to objects (including arrays and other 'objects').

### Mutability with `const`
While it's true that `const` prevents changing its initial value, however this does not prevent `mutation`. Objects are assigned to variables by `reference`, meaning what is held by `const` is a reference to that specific object's `location in memory`, not the object itself.  Because of this, the contents of objects (including array values and properties) are still mutable even if the object is declared with `const`.



## 06. Loose & Strict Equality

### Strict Equality
The concept demonstrated here is **strict equality**: The **strict equality operator** checks whether its two operands are equal in **type *and* value**, returning a `Boolean` result.  It returns `true` when the operands have the same **type *and* value**, `false` otherwise. For an *object*, it will return true **ONLY** if both operands refer to the *same object*.

### Loose Equality
The concept demonstrated here is **loose equality**: The **loose equality operator** checks whether its two operands are equal by value regardless of type, returning a `Boolean` result. Unlike the strict equality operator, if the operands are *different data types*, it will attempt to **coerce** *one or both* operands before comparison. Because the JS engine does this automatically, it's called **implicit coercion**.



## 07. Arguments and Return Values

### What is an Argument?
An `argument` is a value passed into a function via a local variable called a `parameter` at the time of invocation.

### What is a Parameter?
A `parameter` is a named variable supplied as part of a `function definition` which is scoped locally to the function and can accept values (`arguments`) from outside the function at invocation.

### What is an Expression?
An `expression` is any code statement that can be `evaluated` to produce a value.  Because all functions return values, all function `invocations` are by definition `function expressions`.

### Implicit Return Values
An `implicit return value` is an 'automatic' return value. Functions always return *something* to the calling code (the **caller**).  If a function does not return a value explicitly (in code), it will always (`implicitly`) return `undefined` to when passing control back to the caller.

### Explicit Return Values (Return Expressions)
An `explicit return value` is specified as part of the `function definition` by using the `return` keyword `return expression` to specify a value that the function should return to the caller when it exits. When a `return expression` is encoutered, the expression is immediately evaluated and the value and program control is returned to the code that called the function (the `caller`) and the function terminates.  Any function instructions written **after** an executed return expression are skipped.

### Function Composition
Function invocations are valid as both `arguments` and `return values`.  When function invocations are passed to other functions as arguments, this is known as `function composition`.

### Predicates
A `predicate` is a function which always returns a `boolean` value.



## 08. Working with Strings (common methods)

### Strings are Immutable and Primitive
***All string methods return new strings because strings are **primitive** types and therefore **immutable** values.***

### String Search and String Selection Methods
- `string.prototype.includes()`: This method takes a substring as the argument and returns a **boolean** signifying whether that substring exists within the string that `includes` was called on. The search is case-sensitive.
  - `includes()` takes an optional, second argument which specifies the index at which to start the search.

- `string.prototype.charAt()`: This method takes an index value of the calling string as an argument and returns the character at that index.

- `string.prototype.charCodeAt()`: This method returns the Unicode code point or character code of the character at the index of the caller passed to it. If an index is not provided, `charCodeAt()` assumes the index is `0`.

### String Transformations String Copy Methods
- `string.prototype.concat()`: This method concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the **type** `string`, they are converted to string values before concatenating. `concat` can take more than one string as arguments: `concat(str1, str2, ..., strN)`.

- `string.prototype.slice()`: This method extracts a section of a string and returns a new string, without modifying the original string. The `slice` method takes two optional arguments. The first argument specifies the index at which to start the extraction and the second argument specifies the index **BEFORE** which to end the extraction. The character at the ending index is not part of the returned substring.
  - Calling the `slice` method **without any arguments will return a copy** of the original string.
  - If the second argument to `slice` is omitted, all the characters from the start index to the end of the string are returned in the substring.
  - If the first argument is `>=` to the calling strings `length`, an empty string `''` is returned.
  - If the first argument is a negative number e.g. `-2`, the slice begins extraction from `caller.length + startIndex` i.e. `5 + -2` would begin at `caller[3]`.
  - If the second argument is a negative number, the slice will end **before** `caller.length + endIndex`.
  - If the second argument represents a position **before** the starting index, `slice()` will return an empty string `''`.

- `string.prototype.substring()`: This method takes a start index and an end index and returns a substring from the start of the index up to, but not including, the end index. `substring` does not mutate the caller and returns a new string.

- `string.prototype.trim()`: This method removes any amount of whitespace from both ends of the calling string including whitespace characters like `\t` and `\n` and returns the result as a new string.

- `string.prototype.trimStart()` and `string.prototype.trimEnd()`:  These methods remove whitespace from the beginning or end of the calling string, respectively.  Both return a new string.

- `string.prototype.toUpperCase()` and `string.prototype.toLowerCase()`: These methods both return a string identical to the caller but transformed to uppercase and lowercase respectively.

### Converting Strings to Arrays

- `string.prototype.split()`: This method separates the calling string into multiple strings and returns them in the form of an array. What character or pattern is used to separate the string into elements depends on the argument you provide to `split()`.
  - When called without any arguments, returns an array with the string as its only element.
  - When called with an empty string as the argument, `split()` returns an array of all the characters in the string (with some exceptions).
  - When called with any other string as the argument, `split()` will separate the string using the argument as the **delimiter** character.



## 09. Working with Arrays (common methods)

### What is an Array?
An `array` is a heterogeneous (mixed type), ordered list of values which are keyed by positive natural number called `indexes` starting with index `0`. `Arrays` are `iterable` meaning they can be looped through in a defined and predictable order.

### Array Destructuring
`Array destructuring` allows you to assign elements of an array to multiple variables by wrapping the variable names in brackets (`[]`).  Elements are assigned to the variables **in the order which they are received**, therefore, array destructuring assignment is often used with `Object.entries()` and `array.prototype.forEach()`.

### Destructive Array Methods
- `array.prototype.unshift()`: This method *adds* one or more elements to the **beginning** of an array and **returns the length of the new array** to the caller. **This method mutates the calling array.**

- `array.prototype.push()`: This method *adds* one or more elements to the **end** of an array and **returns the length of the new array** to the caller. **This method mutates the calling array.**

- `array.prototype.shift()`: This method *removes* the **first** element from an array and **returns the removed element** to the caller. **This method mutates the calling array.**

- `array.prototype.pop()`: This method *removes* the **last** element from an array and **returns the removed element** to the caller. **This method mutates the calling array.**

- `array.prototype.sort()`: This method sorts all non-`undefined` elements of an array **in place** (mutating the calling array) and **returns the sorted array** to the caller. The default sort behavior is **lexical ascending order**, built by first coercing the elements into strings, then comparing their `UTF-16 codepoint` values to determine order. The elements are returned to their original data types once the sort is completed. **This method mutates the calling array.**

  - `sort()` accepts an **optional** callbackFn argument to the parameter `compareFn` which takes two arguments (`val1` & `val2`) and sorts the calling array based on evaluating the values as `>`, `<`, or `===` each other.  The most common use case for `compareFn` is `numerical` sort and is frequently short handed as an arithmetic operation: `let compareFn = (a, b) => a - b; //ascending numerical sort`

- `array.prototype.reverse()`: This method reverses an array **in place**. The first element becomes the last, and the last element becomes the first, with inside elements translated around the center element as required. **This method mutates the calling array.**

- `array.prototype.splice()`: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place based on the arguments passed to it.  `splice()` accepts is invoked with 3+ parameters: the `start` index to begin the `splice`, the `deleteCount` specifying the number of items to remove beginning from `start` (this number can be `<= 0` to not delete items but if omitted entirely will delete the entire array from `start` to the end of the array), and any number of `elements` to add to the array.`splice()` returns **an array containing the items deleted to the caller**.  **This method mutates the calling array.**

### Non-Destructive Array Methods

- `array.prototype.concat()`: This method returns a new array that contains a copy of the original array combined with additional elements supplied with the arguments. Since `concat` creates a copy of the original array and then mutates the copy. **This method does not mutate the caller.**

- `array.prototype.slice()`: This method returns a **shallow copy** of all or a segment of an array selected from `startIndex` to the element preceding `endIndex` (not inclusive) where `startIndex` and `endIndex` represent the index of items in that array.  Negative `start` and `end` values are legal and are calculated as `array.length + start` (or `end`). If `end` is greater than `array.length` or omitted, the method slices through the end of the sequence. `slice()` returns a new array containing the extracted values. **This method does not mutate the caller.**

- `array.prototype.indexOf()`: This method returns the **first index** at which a value passed as an argument to the method can be found in the calling array.  If the value cannot be found or if the search starting index is greater than or equal to the arrays' length, `indexOf()` returns `-1`.  **This method does not mutate the caller.**

- `array.prototype.includes()`: This method is called directly on an array and searches the calling array for an element whose value is **strictly equal** ( === ) to the single argument passed to it.  It returns `true` when a matching element exists in the calling array and `false` when it does not. **This method does not mutate the caller.**

### Iterator Array Methods

- `array.prototype.forEach()`: is an array iteration method which is called directly on an array and executes a callbackFn for each element in the calling array, passing the current element to the callbackFn as an argument.  `forEach()` is most useful as a way to perform `side effects` as it **will not** make use of an explicit return expression and will **always** return `undefined`.  **This method does not mutate the caller, however it is possible for the callbackFn to do so, though best avoided.**

- `array.prototype.filter()` is an array iteration and selection method which is called directly on array and executes a callbackFn for each element in the calling array, passing the current element to the callbackFn as an argument. The callbackFn of `filter()` evaluates a test condition (the return expression) to determine whether to select the current element.  For each element, if the test evaluates to true (callbackFn returns `true`), `filter()` adds the current element to a **new array** to be returned to the caller. If no elements of the calling array pass the test, `filter` returns an empty array. **This method does not mutate the caller.**

- `array.prototype.map()` is an array iteration and transformation method which is called directly on an array and executes a callbackFn for each element in the calling array. The callbackFn of `map()` performs a transformation on each element passed to it and passes it back to `map()`.  Once every element has been iterated over, `map()` returns a **new array** to the caller, populated with the transformed values for each element of the calling array.  The return array is always equal in length to the calling array.  This also applies to sparse arrays. **This method does not mutate the caller.**

- `array.prototype.reduce()` is an array iteration and recursion method which is called directly on an array and executes a callbackFn for each element in the calling array, usually referred to as the *reducer*. The *reducer* (callbackFn) takes two arguments typically known as the *'accumulator'* or 'previousValue' and the *'currentValue'* which are elements passed from the array `.reduce()` was called on.  The *accumulator* **stores the value of all elements that have been passed to the callbackFn so far and therefore have been 'reduced'**.  The current element is the element currently being iterated over by `reduce()`. `reduce()` accepts a second, optional *'previous value'* argument to initialize the reducer callbackFn with.  If no initial value is specified, the reducer **uses the value at `index 0` of the calling array as the previous value** and the v**alue at `index 1` as the current value**.  If an initial value is specified, `index 0` of the calling array is used as the current value on the first iteration.  Once all elements of the calling array have been iterated over, `reduce()` **returns a single value** based on the operations performed and the data type(s) of the calling array's elements. If the calling array contains **no elements** *and* an **initial value is not provided**, `reduce()` will throw a `TypeError`. **This method does not mutate the caller.**

- `array.prototype.some()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. `some()`'s callback continues to test elements until finding a value that passes the test in which case the method **immediately** returns `true`. If no elements pass the test, `some()` returns `false`. **This method does not mutate the caller.**

- `array.prototype.every()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. If **any** element passed to the callbackFn's test condition evaluates to `false`, `every()` **immediately** returns `false`. Otherwise, it returns `true`. **This method does not mutate the caller.**

- `array.prototype.find()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. `find()` returns the **value** of the **first element** in the calling array that satisfies the provided test condition. If a truthy value is not found `find()` returns `undefined`. **This method does not mutate the caller.**

- `array.prototype.findIndex()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. `findIndex()` returns the **index** of the **first element** in the calling array that satisfies the provided test condition. If no values satisfy the testing function, `-1` is returned.  **This method does not mutate the caller.**



## Working With Objects (common methods)

### Prototypal Inheritence:
Javascript Objects can **inherit** from other objects.  If `objectA` inherits from `objectB` we say that `objectB` is the **prototype** of `objectA`.  This means that `objectA` has access to properties defined on `objectB` even though `objectA` does not define those properties itself.  This concept is critical to understanding some behaviors of object `iterators`.

### Object Properties Methods
- `object.prototype.hasOwnProperty()` takes the name of a `property` and returns `true` if it is the name of one of the **calling object's** own properties, `false` otherwise.  This is useful for dealing with `prototypal property` results from a `for/in` loop.

- `Object.freeze()` is a static method of the Object class which freezes the properties of an object passed to it as an argument, so that they cannot be changed (this includes arrays). It is important to note that the freeze is `shallow`.  If any of the frozen object's properties (or indexes) contain other objects, those nested objects will still be mutable unless they are also explicitly frozen.

### Object Iteration

- `for/in` is a loop statement that is used specifically with objects where a each `property key` is iterated over `in` a named object:  (for (`let prop` in `myObj`)).  `for/in` iterates over all `enumerable properties` including properties of object's `prototypes`.

### Object To Array Iteration

`Object.keys()` is a static method of the Object class which accepts an object as an argument and returns the object's `keys` (property names) as a flat array to the caller.  This only returns the object's **own keys**

`Object.values()` is a static method of the Object class which accepts an object as an argument and returns the object's `key values` (property values) as a flat array to the caller.  This only returns the object's **own values** and the **order of the array is not dependable**.

`Object.entries()` is a static method of the Object class which accepts an object as an argument and returns the object's `key-value pairs` (entries) as an array of nested arrays with each inner array consisting of two elements:  the `property key` and the corresponding `property value`.

`Object.assign()` is a static method of the Object class for **merging** two or more objects which accepts N number of arguments. The first argument is an object with which to merge any objects specified by additional arguments.  It is possible to 'copy' an object by passing an empty object `{ }` as the first parameter.  The object passed to the first parameter **will be mutated** whether it is empty or not. Any number of additional objects can be passed as arguments to be merged with the first.



## 11. Arrays as Objects

### I Have No Idea What They Want...
Arrays have non-enumerable properties like `.length`, you can actually add properties to arrays if you want, too. Arrays obviously have `methods` so arrays are technically objects. You can use some object methods on arrays.  Dunno...not much in the course work... maybe check **09. Working With Arrays**.



## 12. Pass-by-Reference vs. Pass-by-Value

## Pass by Value
`pass-by-value` is the concept that all **primitive values** (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are passed to and returned by functions *by value*. This means that when **primitives** are passed to a function, the function receives a "copy" of the original value as an *argument* which is assigned to a new, *local* variable known as a **parameter**. The original value is therefore *distinctly separate* from the passed value and *cannot* be **mutated** by mutating the argument.

## Pass by Reference
`pass-by-reference` is the concept that whenever **objects** are passed to or returned from a function (including arrays), the function receives a **reference (pointer)** to the object's *location in memory* as an argument, not the value of the object itself. The orginal value and the passed value are *identical references to the **same object** in memory* and therefore an object assigned to a variable outside of a function which is passed into the function as an argument will be permanently changed (`mutated`) if the argument is mutated by the function.



## 13. Variables as Pointers (Call-by-Reference)

### Variables as Pointers (all objects):
`Variables as Pointers` is the concept that any objects (including arrays) are assigned to a variable's memory address *not as values*, but as **references (pointers)** to the object's location in memory.  This means that any variable which references the same object--such as a variable which points to an object which is, itself, assigned to another variable--will reflect changes to the underlying object because it is the **same object**.

### Variables as Pointers (Const, Objects & Object.freeze())
Even when declared with `const`, objects can be **mutated** and properties reassigned unless `Object.freeze()` is used to freeze the object so that its properties *cannot be changed*. Variables which are assigned objects **do not** store a value, but instead store **pointers** to the object and its properties in memory.  While a constant ("variable") declared with `const` cannot be reassigned to point to another address in memory (this is an intrinsic property of `const` regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties *can* change. This is why it is possible to add, remove, or reassign property names and values of objects declared with `const` but *not possible* to change the object that `const` points to.

### Variables as Values (primitives):
All **primitive** data types in JavaScript (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are known as 'atomic' or *indivisible* values and are therefore **immutable** (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is *the value itself* (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.



## 14. Printing vs Returning

### Printing
`console.log()` is sometimes referred to as a 'print statement'.  This method accepts an argument and then prints that argument to the console (the screen in a CLI, or the console in a browser). It is method, so it has a return value: `undefined`, but that value is not typically useful.

### Returning
All expressions `return` a value.  This includes `variable initialization`, `ternary operation`, `function invocation`, and `arithmetic operations` among other things.  A return value is a value which is passed to the calling code at the end of expression execution, in other words, a 'result', and can be used immediately or assigned to a variable for later use.



## 15. Truthy Values vs. Boolean Values

### Truthiness
The concept of `truthiness` arises out of the `implicit coercion` feature of JS.  This allows JS to use non-boolean data types in conditions, comparisons, and other operations that expect a `true` or `false` value.  We call values `truthy` that can be coerced to evaluate as `true` and `falsy` if they can be coerced to evaluate as `false`.

### Falsy Values
There are 6 `falsy` values:
- Empty strings `''`
- Not a Number `NaN`
- All forms of zero `0`, `-0`, `0n`
- boolean false `false`
- Undefined `undefined`
- Null `null`

### Logical Short Circuiting
In certain cases, JS will `short circuit` logical operations or *assume the result based on the first value*.  If an `AND` operation is performed and the first operand is `falsy`, JS will skip evaluation of the second operands and evaluate to `false`.  If an `OR` operation is performed and the first operand is `truthy`, JS will skip evaluation of the the second operand and evaluated to `true`

### The Ternary Operator:
The `ternary operator` takes three `operands`: a `condition` followed by a question mark `(?)`, then an expression to execute if the condition is `truthy` followed by a colon `(:)`, and finally the expression to execute if the condition is `falsy`.  This operator is frequently used as a shortcut for the if statement and because it is an **expression** that evaluates to a **value**, its value can be assigned to a variable, unlike the `if...else` **statement**.



## 16. Function Definitions vs. Function Invocations

### Function Definition
A `function definition` contains all of the logic and instructions of a function as well as any parameters it accepts.  It may also name the function (functions *can* be anonymous).  A function definition does not `execute` or run the function but it is possible to both define and execute a function using the same expression.

### Function Invocation
A `function invocation` instructs the program to execute (`invoke`) the instructions of the function, specifying any arguments to pass to the function at the time of invocation.  This is also called a `function call`.


## 17. Function Declarations, Function Expressions, and Arrow Functions

### Function Declarations
Put simply, a `function declaration` is any function definition that starts with the `function` keyword.  Declarations are `hoisted` to the top of the execution context (scope) when the program is initialized, which means you can call (run) declared functions earlier than the at point where they are declared.

### Function Expressions
Any function definition that does not start with `function` as well as any function invocation is considered a `function expression`. Common examples are `arrow functions`, `higher order functions`, and functions assigned to variables.  Expressions are not hoisted, so they must be declared and defined before they can be invoked.

## 18. Implicit Return Values

***NOTE: See 07. Arguments & Return Values***

### Implicit Functional Return Values
An `implicit return value` is an 'automatic' return value. Functions always return *something* to the calling code (the **caller**).  If a function does not return a value explicitly (in code), it will always (`implicitly`) return `undefined` to when passing control back to the caller.



## 19. First Class Functions

### First Class Objects
Functions in JS are `first class objects` which means that functions can be treated like any other value: they can be assigned to variables, assigned as properties of other objects (`methods`), and passed to or returned from other functions.

### Higher Order Functions
`higher order functions` are functions which are passed to or returned from other functions. In Javascript, functions passed to other functions as arguments are commonly called `callbacks`.

### Function Composition
Function invocations are valid as both `arguments` and `return values`.  When function invocations are passed to other functions as arguments, this is known as `function composition`.



## 20. Function Side Effects

### Function Side-Effects
Operations performed *inside* of a function that have an effect *outside* the function without being returned are known as **side-effects**.  There are five categories of function side-effects:
  - accessing external interfaces (obtaining user input or logging to the console)
  - mutating objects in outer scopes
  - reassignment of a variable in an outer scope
  - raising an exception without handling it
  - calling another function that causes a side effect

## 21. Legal vs. Idiomatic Naming

### Legal Names
`legal names` describe the set of characters that are accepted as valid by Javascript when declaring identifiers.  Illegal names will throw errors. All `reserved words` are illegal for naming.

### Idiomatic Names
`idiomatic names` are names by popular convention, for instance, using `camelCase` for variables and `PascalCase` for constructors. They are not a requirement, but typically illustrate best practices that have been established such as using `descriptive identifier names` and `avoiding single character variables`.

## Imperative vs Declarative Style

### Imperitive Style
Something is said to be `imperative` when it is described as a logical set of explicit implementation steps e.g. 'rake the yard starting from the northwest corner to the southwest and moving eastward, in parallel passes 3 meters wide, alternating direction with each pass until finishing in the southeast corner'.  The imperator cares greatly how the task is implemented.  In programming this is often called a `procedure`.

### Declarative Style
Something is said to be `declarative` when the logic of what needs to be done is separated from the implementation of how its done, with the implementation being unimportant. 'after raking, dispose of the leaves'. It doesn't matter to the declarator how the leaves are disposed of, just that they're gone. In programming this is often called a `black box`.











<!DOCTYPE html>
<html lang="en" data-color-mode="light" data-light-theme="light" data-dark-theme="dark">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com" crossorigin>
  <link rel="preconnect" href="https://avatars.githubusercontent.com">



  <link crossorigin="anonymous" media="all" integrity="sha512-E9wnWjoxQmh5A1jiWVYDPKOvA8VPf0iKQYoc+9ycMJvtAi9gOSlaUci+W2smxFIlWkV8hkX+O27S8NIB59iIDw==" rel="stylesheet" href="https://github.githubassets.com/assets/light-13dc275a3a314268790358e25956033c.css" /><link data-color-theme="dark" crossorigin="anonymous" media="all" integrity="sha512-nYSv3KrFhMlGUpjkFQBLMEN6HvHhijcoubQLjV3DWlcABEi2yDYf6KGUjRubJ5R+dJnKXR7jA4wu5Dg200SApA==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark-9d84afdcaac584c9465298e415004b30.css" /><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" integrity="sha512-73MN8RaWLT6hOrTrxNJOEI8Pb0ArN01fXatO0tqm/qXy73XBb0FG3f8jd0NfztcQGoLTDF6Pl6AxpbnDvgwAiA==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-ef730df116962d3ea13ab4ebc4d24e10.css" /><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-bOhGZNmild3wSbSBnXK4FdlotedKfGpLBrn2ws0dSVZZaZmQcYoGvkvl1M6L82kHTBkHjonl5pIpbQ9Q066xCw==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-6ce84664d9a295ddf049b4819d72b815.css" /><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" integrity="sha512-AwOAfDuSE0kUy1kcP+UA/Gj0G3V2UahdhGF/3XKhrgH+rX5j33z3/p8INmxmpC1TF1XDDPjwJAmvCECOdgDCNw==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-0303807c3b92134914cb591c3fe500fc.css" /><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" integrity="sha512-MTr0RUpwD911150L11H/RfSf+jCC9M4JQt6f3rFBXTMZZop9I/2FqEUXDYYBLnTqXTel4Ost6mblHDW5IK7Q5Q==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-313af4454a700fdd75d79d0bd751ff45.css" /><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-YtCQQI4gi5fOKm9+JR5jGw5IqvUk4NlWG6r0YRx3SGXtNYMNuVXlTT3X1HZczk1u9vhCYsMevrnz5FfY2lZyWg==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-62d090408e208b97ce2a6f7e251e631b.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-zw7LEKJYRly65tkoCHN9EKkBSW87oNvS/W1iwFRH5uw6orvEHdej1Pom9Hx20gdv+RhaXzHW/3h0QjuAlkhynQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-cf0ecb10a258465cbae6d92808737d10.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-3UPEO6tpXvbFw23ugE4YF8phTQsG9oq8uDCXLoSq+OurPsH67A8KDMQjHdrbq7C+afONNyrU+Pl71+ATEOlqUQ==" rel="stylesheet" href="https://github.githubassets.com/assets/behaviors-dd43c43bab695ef6c5c36dee804e1817.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-MCJFYfbQoT4EXC6aWx5Wghs8FC/jslHEeN2iWXphliccmede2dQlhIBTAUCBq9Yu5poltu4askungzvyCsycGg==" rel="stylesheet" href="https://github.githubassets.com/assets/tab-size-fix-30224561f6d0a13e045c2e9a5b1e5682.css" />
  
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-ZDCoa3tPoCSCkjoc2jvnpZcDgMVmty5RSsIUN3C/8VP4dXUQD7GDWY54Jzk0ne3p1Tl/8joE0rzQIWY3r26bvQ==" rel="stylesheet" href="https://github.githubassets.com/assets/github-6430a86b7b4fa02482923a1cda3be7a5.css" />

  <script crossorigin="anonymous" defer="defer" integrity="sha512-K/kjAAGVhlckApEbskyYOB+ASq3m0GKyJk3y0JoEafwknEbUpmilodEuQQJG09c0v1eCRlX7mSQp+GLGtXmWQg==" type="application/javascript" src="https://github.githubassets.com/assets/environment-2bf92300.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-1QzqMFpBSwRfpLwNjvy7HzWppDH5803c5jyN6K064fvAC/TiKaQF+MiwGcGeEhujqfLnL3lX15BKt2RqSzwlSg==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-frameworks-d50cea30.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VCprQIl55Uv72iPpYaNMju6N2rRE1xqFzT84jOqw0wBSN37ACO/9V0zgV6w6GwbQkAU/XF+n82OWwtjEQ5fV6Q==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-vendor-542a6b40.js"></script>
  
  <script crossorigin="anonymous" defer="defer" integrity="sha512-Cob7ptaSJgnqGhNsK0iTvxZ88ZZNj1c7DNulCfmD6PoQSQ+pbDHzCn4v2ts7xmLCdi2ogqom36nXZDgyNSiPZQ==" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-0a86fba6.js"></script>
  
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ODZJzCJpaOfusrIka5QVZQcPiO9LBGyrrMYjhhJWSLuCN5WbZ5xiEiiOPOKVu71dqygyRdB2TY7AKPA1J5hqdg==" type="application/javascript" data-module-id="./chunk-unveil.js" data-src="https://github.githubassets.com/assets/chunk-unveil-383649cc.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-emPgUbSwW9ezLCgRnTE7n4fbbfc/MqEEDHmnkmG61dTyjWKHTYKN4wN3OPS7SY0fwmSJ8mB5+gng2nZw4/HsUg==" type="application/javascript" data-module-id="./chunk-animate-on-scroll.js" data-src="https://github.githubassets.com/assets/chunk-animate-on-scroll-7a63e051.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ocfEAp6AJvGh4otXKow+AVJ14ysircwHagMkRQ3hoQvuy/U9agyT1cYKYiSYph1VLNaI/aAXwVd2go1pb3DD8A==" type="application/javascript" data-module-id="./chunk-input-demux.js" data-src="https://github.githubassets.com/assets/chunk-input-demux-a1c7c402.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-tM2UlPYv6Z04ZoFXp/P+9sanpA9adLc2Y8CIfnVE7OvO0Z41BNLEyIIuxIE87D5su+5Q7HREnk5ZBKWPL8IOQg==" type="application/javascript" data-module-id="./chunk-ref-selector.js" data-src="https://github.githubassets.com/assets/chunk-ref-selector-b4cd9494.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-LsL0Q+kokbEkffjiD0xUiR97zM17wZBt8WBuQwLaLuWpKV3x9rkcZv+A295R8RXTbZuYWZ+OGIEhjSklQjK0vg==" type="application/javascript" data-module-id="./chunk-filter-input.js" data-src="https://github.githubassets.com/assets/chunk-filter-input-2ec2f443.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ynV5nM8UuCr4KZ/msFeRxRL6LnG+XUKzIfh6LNIzQ21ecjLVPvm53ghTE54aIuSUaHJWHnsYg8FRzycZIcRHiA==" type="application/javascript" data-module-id="./chunk-edit.js" data-src="https://github.githubassets.com/assets/chunk-edit-ca75799c.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-zFw83Br81EgtomfNYoZM5UzXZKrlobhEEuoVA0qrNwlcvMCD5X3q5pOtXVL16Uw0l/RRThOPPvBInoS+Gks8tQ==" type="application/javascript" data-module-id="./chunk-responsive-underlinenav.js" data-src="https://github.githubassets.com/assets/chunk-responsive-underlinenav-cc5c3cdc.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-gmw7obKL/JEHWPp6zWFh+ynbXUFOidj1DN2aPiTDwP8Gair0moVuDmA340LD84A29I3ZPak19CEiumG+oIiseg==" type="application/javascript" data-module-id="./chunk-tag-input.js" data-src="https://github.githubassets.com/assets/chunk-tag-input-826c3ba1.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Ao9llFIlj54ApuKf2QLboXukbu2h7MHfMmtYHrrsVe1lprKNLiA0usVcRpvruKhfT5STDuWm/GGmyx8ox27hWQ==" type="application/javascript" data-module-id="./chunk-notification-list-focus.js" data-src="https://github.githubassets.com/assets/chunk-notification-list-focus-028f6594.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-SPWd3rzrxmU6xW6vy1JPWCd+3uWFWmnd0MVGpmw/TpHWUAdLWDqL8kWyC/sBIZJmda4mTtUO1DHJQzAXRSrC+g==" type="application/javascript" data-module-id="./chunk-cookies.js" data-src="https://github.githubassets.com/assets/chunk-cookies-48f59dde.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4vVRplWFI7P4m3RHQ0QAhkq6eZUdtIE8PBhsKYJRwDkhQw9iK/U1st1/fM1tQZFuBFwGMyqaZblbWtQ+2ejcqQ==" type="application/javascript" data-module-id="./chunk-slug.js" data-src="https://github.githubassets.com/assets/chunk-slug-e2f551a6.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-MK53GXbb2BPV+ADlEbJbkrvg34WPcAd5RC2nBJhUH1tR/Mjr9xrsf56ptBajfWcIWKRKbqqRtLktgr0wAbB3zw==" type="application/javascript" data-module-id="./chunk-async-export.js" data-src="https://github.githubassets.com/assets/chunk-async-export-30ae7719.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-tw9SApiMkftVBYeb6/VGhEwGNw8tlyBhXc9RVXH4UbCD6u+48uuCMvXf3bxvBdOld0OoYg83SnD2mgJWhdaTiQ==" type="application/javascript" data-module-id="./chunk-premium-runners.js" data-src="https://github.githubassets.com/assets/chunk-premium-runners-b70f5202.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Lrm8u2MdzXjItcf94UC8RyxQRLxI99xOHX4lSm2/BeP3Qp/fY31KJsB/PK6jPRgAcV6MeGYFepWP8y1q2R4WUg==" type="application/javascript" data-module-id="./chunk-get-repo-element.js" data-src="https://github.githubassets.com/assets/chunk-get-repo-element-2eb9bcbb.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4rRDg68sT8HA9RRbb+k0JJtMxhKVklKcYNdpNPeLnVtuHlZQZQQcmUnm9SvJ9+F0+iJsBoMnhoQ9NQqcOy1yGg==" type="application/javascript" data-module-id="./chunk-prefetched-provider.js" data-src="https://github.githubassets.com/assets/chunk-prefetched-provider-e2b44383.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-xhSAO0KtnFAlRqAK+mg8BPj/J334ccvnCmmjmBQBCgZcsoO9teHJSS6oAn3XOWYFsWPU2JehwG7S3OVEbLwdUg==" type="application/javascript" data-module-id="./chunk-color-modes.js" data-src="https://github.githubassets.com/assets/chunk-color-modes-c614803b.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-jitxouuFY6SUcDZV5W3jhadVEIfFBfCQZxfPV3kxNnsWEBzbxMJFp0ccLb7+OlBjSs1zU/MNtuOV6T9Ay7lx4w==" type="application/javascript" data-module-id="./chunk-copy.js" data-src="https://github.githubassets.com/assets/chunk-copy-8e2b71a2.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-gwuBCPcczyGD5IyVEn/uqJXvT07GaVMryQC+ZfDhViO9r2JaqeAc4ooM3cVSjqo4m3IK6Y+boPI8MSf4mLlAgQ==" type="application/javascript" data-module-id="./chunk-voting.js" data-src="https://github.githubassets.com/assets/chunk-voting-830b8108.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-HDsLJf6gAN+WDFaJneJwmIY82XkZKWqeX7tStBLRh1XM53K8vMV6JZvjq/UQXszaNVWxWcuYtgYTG6ZWo8+QSw==" type="application/javascript" data-module-id="./chunk-confetti.js" data-src="https://github.githubassets.com/assets/chunk-confetti-1c3b0b25.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vAs99bZfAF+pQjzGYSEM/dzYwm4SIxUxrcjdLuatAV6WJu/kfw8+s/SO7In/gHFhCR08sl7a38vA+dDmYAYHyQ==" type="application/javascript" data-module-id="./chunk-codemirror.js" data-src="https://github.githubassets.com/assets/chunk-codemirror-bc0b3df5.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Gr3ZcJt5t73JeBM3NwOEziKyDZ3HpHwzqZL/c1pgTUfo+6QC5f88XXRw/RT6X2diwqvaa3OVFh0oWsZ9ZxhtdQ==" type="application/javascript" data-module-id="./chunk-tip.js" data-src="https://github.githubassets.com/assets/chunk-tip-1abdd970.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-EdQvlnI4Pu5Q6K0HCvp+mi0Vw9ZuwaEuhbnCbmFKX+c0xwiUWY0L3n9P0F6doLhaHhfpvW3718+miL11WG4BeA==" type="application/javascript" data-module-id="./chunk-line.js" data-src="https://github.githubassets.com/assets/chunk-line-11d42f96.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4zSHP2sQXPKoN9jFy8q2ThHsQNej8s4qhubSR4g0/2dTexAEnoTG+RbaffdIhmjfghGjpS/DlE0cdSTFEOcipQ==" type="application/javascript" data-module-id="./chunk-array.js" data-src="https://github.githubassets.com/assets/chunk-array-e334873f.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-g8fb6U7h9SkWgiK69nfNMn4aN5D2YBYPZUbCIuLpemWoOw8NOaZY8Z0hPq4RUVs4+bYdCFR6K719k8lwFeUijg==" type="application/javascript" data-module-id="./chunk-band.js" data-src="https://github.githubassets.com/assets/chunk-band-83c7dbe9.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4GJz2wyWwjq7P4hyx3qSkjvnTO7RG5cWvnePVXPB+Oji6MBVugAdl7kCTKbpX8+Ae2ONvGJwFzSc9A7m1pqzXw==" type="application/javascript" data-module-id="./chunk-toast.js" data-src="https://github.githubassets.com/assets/chunk-toast-e06273db.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-miaiZ1xkDsWBUsURHOmeYtbgVKQGnm1octCo/lDXUmPzDyjtubnHULRVw1AK+sttwdwyB0+LOyhIVAWCNSGx+A==" type="application/javascript" data-module-id="./chunk-delayed-loading-element.js" data-src="https://github.githubassets.com/assets/chunk-delayed-loading-element-9a26a267.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-GD25CNhMGDMzEmeFhUT0FILBupAkx5/CHohnYXOP1togy40O0iu/lASaSp3gV8ue0nwscalJVQqR5gKDRHHDVg==" type="application/javascript" data-module-id="./chunk-three.module.js" data-src="https://github.githubassets.com/assets/chunk-three.module-183db908.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-xmwKlhTMNVRU8mZLQQVMRsISs88kvYD44890vqs2UgtRESeLhm81nd88P6SoLiGMjyUDMTR0IzBCauoacaqSkA==" type="application/javascript" data-module-id="./chunk-invitations.js" data-src="https://github.githubassets.com/assets/chunk-invitations-c66c0a96.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vFR+IqThljOLrAWmjhOL/kiQrjgZZg95uPovX0J7kRH5p7Y049LDRZaXLMDijfeqqk71d3MMn9XP5bUcH+lB9w==" type="application/javascript" data-module-id="./chunk-profile.js" data-src="https://github.githubassets.com/assets/chunk-profile-bc547e22.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-W3TFrSn3Iqu38aVxxYxFiNGzaVmLXtGfwRDVRH1RwRvqPVerX1fjQPEYag+HqAoWaGy5ssVFp42oyOIV93afBw==" type="application/javascript" data-module-id="./chunk-overview.js" data-src="https://github.githubassets.com/assets/chunk-overview-5b74c5ad.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-xqw233932eUGcGURAPuwUWZpC5Km/9Btq7/2Jnkt1rSWnPSVfMl+JKpr9eLtCoQmrpgP8vaghEuX8bWAS8fzTg==" type="application/javascript" data-module-id="./chunk-advanced.js" data-src="https://github.githubassets.com/assets/chunk-advanced-c6ac36df.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-6Rmd0BBAsJ9ouvb/pgrkToMPs5ogcqi8rcQ7R3GDPPHIjlu0NZ0Bx6HUn/aOruMCECETHm4Exfs5gjYdHs66RQ==" type="application/javascript" data-module-id="./chunk-runner-groups.js" data-src="https://github.githubassets.com/assets/chunk-runner-groups-e9199dd0.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-5H5N/3G/20nmVKntphXb9z0H9q3URFDmHSccLhFkMSA8ILAA9mYlRKCWAWoDcl/W437jtGw1tIxjWStfInvidw==" type="application/javascript" data-module-id="./chunk-profile-pins-element.js" data-src="https://github.githubassets.com/assets/chunk-profile-pins-element-e47e4dff.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-6WJL+zyYirKxwD8MNBenuxbMKvCeskXBrXISNlqhV3kltmI8kiSjUX0nDQM3fXeSakcll12sYS8Pli1GFPtG9Q==" type="application/javascript" data-module-id="./chunk-emoji-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-emoji-picker-element-e9624bfb.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-EvJ2Fip59DXgARNuwTWgjdVqoCjhXQL73SP9yexijlWStKq92sfbKeGK5R4wIP0QOr39WsnW/Kaw3Wpl1QPfog==" type="application/javascript" data-module-id="./chunk-edit-hook-secret-element.js" data-src="https://github.githubassets.com/assets/chunk-edit-hook-secret-element-12f27616.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-91JzWtpBUoC7Z4dQpeXRegjwCMooGPFtg/vXxaIGVTxguoOcI/hEdyM7otQGRNQmMencK71thI0oGt11Wgfrww==" type="application/javascript" data-module-id="./chunk-insights-query.js" data-src="https://github.githubassets.com/assets/chunk-insights-query-f752735a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ySdUENYEBMcTMRqhu0hVPVoUQfqjCkRuNy9wtKP3bEcYkMVYCSfEK4HJUTbuu3r4R7b9i6cGRHh8O3fA2/Jqyw==" type="application/javascript" data-module-id="./chunk-remote-clipboard-copy.js" data-src="https://github.githubassets.com/assets/chunk-remote-clipboard-copy-c9275410.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-eO/r0W5ywI2kxVkcH8yquw3n5Gh+cA8lVOgxd+ecgJYU81FB4Q5FqFxgHhx1omigPwexB4ltwXBMDhSeW6qNeQ==" type="application/javascript" data-module-id="./chunk-series-table.js" data-src="https://github.githubassets.com/assets/chunk-series-table-78efebd1.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-eCSMVL1aAfhWSme4/3seObqN3HNdkxWVKaAX5bmZmxIXZdv0ixnuFJeESYdLeMED/wQETtQ971A03mLF3ZX8eQ==" type="application/javascript" data-module-id="./chunk-line-chart.js" data-src="https://github.githubassets.com/assets/chunk-line-chart-78248c54.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-rZhcZvsxbGBxibYeNv4aHYZkgZzW6xnRcAqmuOCbq/ehJgr75pxgiV7HrGrYrX9HNmyH8T+90HC9WSBZNM4L3g==" type="application/javascript" data-module-id="./chunk-bar-chart.js" data-src="https://github.githubassets.com/assets/chunk-bar-chart-ad985c66.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-/QP5yDdYoor56F2+SyPr/8a9FtvCZnnGP0d+lSAHQR5n+xYjaiY6LjJGB/x1cevAH8r4XY/axNN9fRWIfbwAcA==" type="application/javascript" data-module-id="./chunk-stacked-area-chart.js" data-src="https://github.githubassets.com/assets/chunk-stacked-area-chart-fd03f9c8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-TKUxqL6IByP8qqlx+WNc34g/slipjnnKi57B1EBicEWDMUMcBLFsrRiHY535WKJOrkjsqmpJXT5cSE4q6wEyAw==" type="application/javascript" data-module-id="./chunk-presence-avatars.js" data-src="https://github.githubassets.com/assets/chunk-presence-avatars-4ca531a8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-lkC6s2VaqqzXt1XyrCWmJ1ZolmjIVBcadmxjfUansOJlqeIRYTTqjnMzHvnjnqt6ve2mdLTt5s6iaK9eC8JQrw==" type="application/javascript" data-module-id="./chunk-pulse-authors-graph-element.js" data-src="https://github.githubassets.com/assets/chunk-pulse-authors-graph-element-9640bab3.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-aNAcFMlIdG1ocY5LnZylnN/6KXiJxyPvKg7y1Jnai732wdnrjXazcvNiQkRnj5FY8WP6JRa3K4doCReA4nhj7w==" type="application/javascript" data-module-id="./chunk-stacks-input-config-view.js" data-src="https://github.githubassets.com/assets/chunk-stacks-input-config-view-68d01c14.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-48cie2yevP3AX9vgMj7W25fOv4YujgRxBC3jJ/YnpUEitvyeu6sauZYg1/HBwIYPIvu+JKsCDRGD/9nLq8ZovA==" type="application/javascript" data-module-id="./chunk-community-contributions.js" data-src="https://github.githubassets.com/assets/chunk-community-contributions-e3c7227b.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-fx3qkTaNOwACIrHcd0c9dUe0gtyWr88gcBbdpn5gXvZtBD4Mn3IhF/Ys5CoffBA9pzx7KFRNxjJkIN+Jhf1vnw==" type="application/javascript" data-module-id="./chunk-discussion-page-views.js" data-src="https://github.githubassets.com/assets/chunk-discussion-page-views-7f1dea91.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-qEHZhSvfA+6V31W4k6upvHeMIZI48wt8LNsbFrBFx2qJ4YAdTIxJx0kjryhKOJUaJk1FqK7FehDzoX3MrgWoHg==" type="application/javascript" data-module-id="./chunk-discussions-daily-contributors.js" data-src="https://github.githubassets.com/assets/chunk-discussions-daily-contributors-a841d985.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-RZFMDTXA6+c7lX5QmHt2C4cEbES9a3V7FCFUNn7V44xzj9vih7iv1yAciPJvZUvRbEi53dNXeKLc2c/1CogcXw==" type="application/javascript" data-module-id="./chunk-discussions-new-contributors.js" data-src="https://github.githubassets.com/assets/chunk-discussions-new-contributors-45914c0d.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-TLQillrC8dagau7Smjy8GmWx3jhSvBCnkTPMStBL7tvLAaowBuGx38ICPFBdM+3ammiRlfXAaEe5OdpimWnnmQ==" type="application/javascript" data-module-id="./chunk-tweetsodium.js" data-src="https://github.githubassets.com/assets/chunk-tweetsodium-4cb42296.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-eHSwjhwcxnPBWzrxiC7rQ53wHZETtJQTXUqb6WPdetPBeznP2kqRbmlyCcMXCIrqxGXpzY34wFs8/rWHYjNLFw==" type="application/javascript" data-module-id="./chunk-jump-to.js" data-src="https://github.githubassets.com/assets/chunk-jump-to-7874b08e.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-T3CuYDHAivvjENXpjyng7klVa3JwFrS4vJ+Ac6QdsKcDLIC9CT61uwVeNnHVhcEHsp4jk9idR56Qv5VZ7tXBkg==" type="application/javascript" data-module-id="./chunk-user-status-submit.js" data-src="https://github.githubassets.com/assets/chunk-user-status-submit-4f70ae60.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-L2jxBDS9QAN9O1qn7LqMcs0YJn/gF6xW73zSbWPRlVCEnG05dexaoJWkAG6RqALTnXLsj2GTUKnba6DATR828g==" type="application/javascript" data-module-id="./chunk-launch-code-element.js" data-src="https://github.githubassets.com/assets/chunk-launch-code-element-2f68f104.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-cvjyIYhR2ZkuFAXHYZSjPTc5wXYOdISgqbXw69CXpDXdxffXmXuzjCcGJNVk3mDNYsVH4Q9sb2UMNPFrNxxRUQ==" type="application/javascript" data-module-id="./chunk-metric-selection-element.js" data-src="https://github.githubassets.com/assets/chunk-metric-selection-element-72f8f221.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-/2Oeznu4Qh8QuYb4OvlxCrx/tIfHWnJrhjNFW7MOl0nRMSVUPowbUJ4F+HpdkepXw/OZkF22CN7CN1dRv8bJmQ==" type="application/javascript" data-module-id="./chunk-severity-calculator-element.js" data-src="https://github.githubassets.com/assets/chunk-severity-calculator-element-ff639ece.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VjkMdcEtlHEJjard7MoGBDuAJ4N4vQlJpvGXIJo9d/i/HGnwF3gLFyYqzjHE7UxyP3pturpOv8BQ29Vnr/Atwg==" type="application/javascript" data-module-id="./chunk-command-palette-page-element.js" data-src="https://github.githubassets.com/assets/chunk-command-palette-page-element-56390c75.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Z6+ifrBeboG0rRu5KFwsFPLjlDI7CDTCmmLk4UiiUtDyrFoG5/iYC591qjpC9YaZt1ZJBkGP5KbN/ijCbZUGCw==" type="application/javascript" data-module-id="./chunk-command-palette-page-stack-element.js" data-src="https://github.githubassets.com/assets/chunk-command-palette-page-stack-element-67afa27e.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-yXHkwiNZgB6O0iSDKE8jrZzTtTyF8YdFFXHcemhWEPuN3sWs1PQrSwEh0Gw4/B9TIzUfvogbqlJ71yLLuqyM+Q==" type="application/javascript" data-module-id="./chunk-readme-toc-element.js" data-src="https://github.githubassets.com/assets/chunk-readme-toc-element-c971e4c2.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-aGaoVKNIqNkSpelOnfn0UCDbQLW2XBUVVkOOgVZXFNDfgJgFQNMXALc0964DwIi9kYrkYQIShePOSMFo20hHkw==" type="application/javascript" data-module-id="./chunk-feature-callout-element.js" data-src="https://github.githubassets.com/assets/chunk-feature-callout-element-6866a854.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-UPU+AoAUE6KHEpUgAiTtiIcSfgpjC2CMLgSwufa4HHT3Vp5xC+2XCBPh/uS9JQLm6s1jJsQEGyYWY4OKHtVbjQ==" type="application/javascript" data-module-id="./chunk-codespaces-policy-form-element.js" data-src="https://github.githubassets.com/assets/chunk-codespaces-policy-form-element-50f53e02.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-tjhrAsOwOkMKShPCR1t5kJuCZDh0qkv391TPnBsrNJ5wyvwVAUqVQW2bsVNvcyft0Cu2ECsH/R+7Pr91r52Ktg==" type="application/javascript" data-module-id="./chunk-action-list-element.js" data-src="https://github.githubassets.com/assets/chunk-action-list-element-b6386b02.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-3+zUhNS4KGmiMIFiQ6EUBvHTwy6xs4XRC61A+/oJegTh0OCubEosQqG7OnvUuAUd8i6PwhYaZbRm2HXZAW5kgA==" type="application/javascript" data-module-id="./chunk-memex-project-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-memex-project-picker-element-dfecd484.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ooYcnNLBDnMePhMvdQEQiItFZowYg4gwklGZGCrAWPW1LCxePPkzB1kr8U3Bay0NPKYEDmICeXBqqDPd8EDmqA==" type="application/javascript" data-module-id="./chunk-project-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-project-picker-element-a2861c9c.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-YYzSijUU1oA10iMuvfzSHMK7vrQzu8aiLpIfD13kpcq2KVMqdOrIASINY5sBUNPNFZbSLKmBfTcEXEKVcQZHfQ==" type="application/javascript" data-module-id="./chunk-sortable-behavior.js" data-src="https://github.githubassets.com/assets/chunk-sortable-behavior-618cd28a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-6JUQHgkTqBaCCdDugMcO4fQ8YxUHk+m6rwVp2Wxa4FMVz6BbBMPOzGluT4wBq8NTUcFv6DnXSOnt5e85jNgpGg==" type="application/javascript" data-module-id="./chunk-drag-drop.js" data-src="https://github.githubassets.com/assets/chunk-drag-drop-e895101e.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-28pipPJZvizfcYYETJWBBeDHsrDEz7A06d7Y5swgY/OWmsX0ZJW6mkZVFRO7Z/xZh1D1qFbPHGNixfCd1YpBnA==" type="application/javascript" data-module-id="./chunk-contributions-spider-graph.js" data-src="https://github.githubassets.com/assets/chunk-contributions-spider-graph-dbca62a4.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VQRofBwNZhBa4vBuw0P5bjjlVtO2R+l1M0TOfMZHX1bB7xy//CFwqmyaL24rLfgLx8sahKZ7eEw1o+nkFoUzNA==" type="application/javascript" data-module-id="./chunk-webgl-warp.js" data-src="https://github.githubassets.com/assets/chunk-webgl-warp-5504687c.js"></script>
  
  <script crossorigin="anonymous" defer="defer" integrity="sha512-qb0VNYEOQchz8PqWuYrIqNtb9eGvMmT2WN43rHOug+XWYaUbOkE+mpDBDFWKS7kXjDWK/Glk35qm34JHOEnAQw==" type="application/javascript" src="https://github.githubassets.com/assets/repositories-a9bd1535.js"></script>
<script crossorigin="anonymous" defer="defer" integrity="sha512-ICUv50Qz2AAC2/u3xVLvTYSyGd1drvd4+eUWMEc+vx4TXYjgLos3MAqKzYVXrcbPr0cyknutSEbBG519piaiGQ==" type="application/javascript" src="https://github.githubassets.com/assets/diffs-20252fe7.js"></script>

  <meta name="viewport" content="width=device-width">
  
  <title>js109/exercises.md at main · jefflovell/js109</title>
    <meta name="description" content="109 exam resources. Contribute to jefflovell/js109 development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905" />
    <meta name="twitter:image:src" content="https://opengraph.githubassets.com/ce9033db5ad9ff9763cfe6cb08cf95fcb5d036fe106d50b7380d57e4ba6034a2/jefflovell/js109" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="js109/exercises.md at main · jefflovell/js109" /><meta name="twitter:description" content="109 exam resources. Contribute to jefflovell/js109 development by creating an account on GitHub." />
    <meta property="og:image" content="https://opengraph.githubassets.com/ce9033db5ad9ff9763cfe6cb08cf95fcb5d036fe106d50b7380d57e4ba6034a2/jefflovell/js109" /><meta property="og:image:alt" content="109 exam resources. Contribute to jefflovell/js109 development by creating an account on GitHub." /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="js109/exercises.md at main · jefflovell/js109" /><meta property="og:url" content="https://github.com/jefflovell/js109" /><meta property="og:description" content="109 exam resources. Contribute to jefflovell/js109 development by creating an account on GitHub." />
    



    

  <link rel="assets" href="https://github.githubassets.com/">
    <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/56492231/ws?session=eyJ2IjoiVjMiLCJ1Ijo1NjQ5MjIzMSwicyI6ODA3NzcxMjE2LCJjIjozOTQ1MTMxNzQyLCJ0IjoxNjQxMDU2ODc4fQ==--5d3d83e408034525f75b476b2e98b9ba5c421fa88849925d9bf0fba26f2940ee" data-refresh-url="/_alive" data-session-id="0733ae8f459d1f2a1a04bb24027e1000ea0327ac219b894c72fc029ba1420d52">
    <link rel="shared-web-socket-src" href="/assets-cdn/worker/socket-worker-9c817d86.js">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="8D15:26B6:31B80F6:4C6301B:61D08A66" data-pjax-transient="true" /><meta name="html-safe-nonce" content="ae0e4a8a429aaf82976de0f0979b9242f0bbc94ef5512465f1638b9cf3004555" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6bnVsbCwicmVxdWVzdF9pZCI6IjhEMTU6MjZCNjozMUI4MEY2OjRDNjMwMUI6NjFEMDhBNjYiLCJ2aXNpdG9yX2lkIjoiMzMwOTkzOTMzNzM5NzQxODMwMiIsInJlZ2lvbl9lZGdlIjoiaWFkIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient="true" /><meta name="visitor-hmac" content="05372d929ebe9224ac9f178bd2acbfeb0c2cbb1b367d76752483cdc4a4825531" data-pjax-transient="true" />

    <meta name="hovercard-subject-tag" content="repository:443447755" data-pjax-transient>


  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-url" content="https://collector.githubapp.com/github/collect" /><meta name="octolytics-actor-id" content="56492231" /><meta name="octolytics-actor-login" content="shaneziegler" /><meta name="octolytics-actor-hash" content="509ead1ee0c46a47cb44a5afb1a34cf2d08c5b431f560f031f65728dd916de1a" />

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />

  



  <meta name="optimizely-datafile" content="{&quot;version&quot;: &quot;4&quot;, &quot;rollouts&quot;: [], &quot;typedAudiences&quot;: [], &quot;anonymizeIP&quot;: true, &quot;projectId&quot;: &quot;16737760170&quot;, &quot;variables&quot;: [], &quot;featureFlags&quot;: [], &quot;experiments&quot;: [{&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20438636352&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20484957397&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20479227424&quot;, &quot;key&quot;: &quot;growth_ghec_onboarding_experience&quot;, &quot;layerId&quot;: &quot;20467848595&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 1000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 3000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 6000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 8000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {&quot;85e2238ce2b9074907d7a3d91d6feeae&quot;: &quot;control&quot;}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20667381018&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20680930759&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20652570897&quot;, &quot;key&quot;: &quot;project_genesis&quot;, &quot;layerId&quot;: &quot;20672300363&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20667381018&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20680930759&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {&quot;83356e17066d336d1803024138ecb683&quot;: &quot;treatment&quot;, &quot;18e31c8a9b2271332466133162a4aa0d&quot;: &quot;treatment&quot;, &quot;10f8ab3fbc5ebe989a36a05f79d48f32&quot;: &quot;treatment&quot;, &quot;1686089f6d540cd2deeaec60ee43ecf7&quot;: &quot;treatment&quot;}}], &quot;audiences&quot;: [{&quot;conditions&quot;: &quot;[\&quot;or\&quot;, {\&quot;match\&quot;: \&quot;exact\&quot;, \&quot;name\&quot;: \&quot;$opt_dummy_attribute\&quot;, \&quot;type\&quot;: \&quot;custom_attribute\&quot;, \&quot;value\&quot;: \&quot;$opt_dummy_value\&quot;}]&quot;, &quot;id&quot;: &quot;$opt_dummy_audience&quot;, &quot;name&quot;: &quot;Optimizely-Generated Audience for Backwards Compatibility&quot;}], &quot;groups&quot;: [], &quot;sdkKey&quot;: &quot;WTc6awnGuYDdG98CYRban&quot;, &quot;environmentKey&quot;: &quot;production&quot;, &quot;attributes&quot;: [{&quot;id&quot;: &quot;16822470375&quot;, &quot;key&quot;: &quot;user_id&quot;}, {&quot;id&quot;: &quot;17143601254&quot;, &quot;key&quot;: &quot;spammy&quot;}, {&quot;id&quot;: &quot;18175660309&quot;, &quot;key&quot;: &quot;organization_plan&quot;}, {&quot;id&quot;: &quot;18813001570&quot;, &quot;key&quot;: &quot;is_logged_in&quot;}, {&quot;id&quot;: &quot;19073851829&quot;, &quot;key&quot;: &quot;geo&quot;}, {&quot;id&quot;: &quot;20175462351&quot;, &quot;key&quot;: &quot;requestedCurrency&quot;}, {&quot;id&quot;: &quot;20785470195&quot;, &quot;key&quot;: &quot;country_code&quot;}], &quot;botFiltering&quot;: false, &quot;accountId&quot;: &quot;16737760170&quot;, &quot;events&quot;: [{&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;17911811441&quot;, &quot;key&quot;: &quot;hydro_click.dashboard.teacher_toolbox_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18124116703&quot;, &quot;key&quot;: &quot;submit.organizations.complete_sign_up&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18145892387&quot;, &quot;key&quot;: &quot;no_metric.tracked_outside_of_optimizely&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18178755568&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.add_repo&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18180553241&quot;, &quot;key&quot;: &quot;submit.repository_imports.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18186103728&quot;, &quot;key&quot;: &quot;click.help.learn_more_about_repository_creation&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18188530140&quot;, &quot;key&quot;: &quot;test_event.do_not_use_in_production&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18191963644&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.transfer_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18195612788&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.import_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18210945499&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.invite_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18211063248&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.create_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18215721889&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.update_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18224360785&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.dismiss&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18234832286&quot;, &quot;key&quot;: &quot;submit.organization_activation.complete&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18252392383&quot;, &quot;key&quot;: &quot;submit.org_repository.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18257551537&quot;, &quot;key&quot;: &quot;submit.org_member_invitation.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18259522260&quot;, &quot;key&quot;: &quot;submit.organization_profile.update&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18564603625&quot;, &quot;key&quot;: &quot;view.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18568612016&quot;, &quot;key&quot;: &quot;click.classroom_sign_in_click&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18572592540&quot;, &quot;key&quot;: &quot;view.classroom_name&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18574203855&quot;, &quot;key&quot;: &quot;click.classroom_create_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18582053415&quot;, &quot;key&quot;: &quot;click.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18589463420&quot;, &quot;key&quot;: &quot;click.classroom_create_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591323364&quot;, &quot;key&quot;: &quot;click.classroom_create_first_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591652321&quot;, &quot;key&quot;: &quot;click.classroom_grant_access&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18607131425&quot;, &quot;key&quot;: &quot;view.classroom_creation&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;18831680583&quot;, &quot;key&quot;: &quot;upgrade_account_plan&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19064064515&quot;, &quot;key&quot;: &quot;click.signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19075373687&quot;, &quot;key&quot;: &quot;click.view_account_billing_page&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19077355841&quot;, &quot;key&quot;: &quot;click.dismiss_signup_prompt&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19079713938&quot;, &quot;key&quot;: &quot;click.contact_sales&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19120963070&quot;, &quot;key&quot;: &quot;click.compare_account_plans&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19151690317&quot;, &quot;key&quot;: &quot;click.upgrade_account_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19424193129&quot;, &quot;key&quot;: &quot;click.open_account_switcher&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19520330825&quot;, &quot;key&quot;: &quot;click.visit_account_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19540970635&quot;, &quot;key&quot;: &quot;click.switch_account_context&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19730198868&quot;, &quot;key&quot;: &quot;submit.homepage_signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19820830627&quot;, &quot;key&quot;: &quot;click.homepage_signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19988571001&quot;, &quot;key&quot;: &quot;click.create_enterprise_trial&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20036538294&quot;, &quot;key&quot;: &quot;click.create_organization_team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20040653299&quot;, &quot;key&quot;: &quot;click.input_enterprise_trial_form&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20062030003&quot;, &quot;key&quot;: &quot;click.continue_with_team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20068947153&quot;, &quot;key&quot;: &quot;click.create_organization_free&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20086636658&quot;, &quot;key&quot;: &quot;click.signup_continue.username&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20091648988&quot;, &quot;key&quot;: &quot;click.signup_continue.create_account&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20103637615&quot;, &quot;key&quot;: &quot;click.signup_continue.email&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20111574253&quot;, &quot;key&quot;: &quot;click.signup_continue.password&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20120044111&quot;, &quot;key&quot;: &quot;view.pricing_page&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20152062109&quot;, &quot;key&quot;: &quot;submit.create_account&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20165800992&quot;, &quot;key&quot;: &quot;submit.upgrade_payment_form&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20171520319&quot;, &quot;key&quot;: &quot;submit.create_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20222645674&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.discuss_your_needs&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20227443657&quot;, &quot;key&quot;: &quot;submit.verify_primary_user_email&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20234607160&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.try_enterprise&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20238175784&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20239847212&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.continue_free&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20251097193&quot;, &quot;key&quot;: &quot;recommended_plan&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20438619534&quot;, &quot;key&quot;: &quot;click.pricing_calculator.1_member&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20456699683&quot;, &quot;key&quot;: &quot;click.pricing_calculator.15_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20467868331&quot;, &quot;key&quot;: &quot;click.pricing_calculator.10_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20476267432&quot;, &quot;key&quot;: &quot;click.trial_days_remaining&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20476357660&quot;, &quot;key&quot;: &quot;click.discover_feature&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20479287901&quot;, &quot;key&quot;: &quot;click.pricing_calculator.custom_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20481107083&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.apply_teacher_benefits&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20483089392&quot;, &quot;key&quot;: &quot;click.pricing_calculator.5_members&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;, &quot;20652570897&quot;], &quot;id&quot;: &quot;20484283944&quot;, &quot;key&quot;: &quot;click.onboarding_task&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20484996281&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.apply_student_benefits&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20486713726&quot;, &quot;key&quot;: &quot;click.onboarding_task_breadcrumb&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20490791319&quot;, &quot;key&quot;: &quot;click.upgrade_to_enterprise&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20491786766&quot;, &quot;key&quot;: &quot;click.talk_to_us&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20494144087&quot;, &quot;key&quot;: &quot;click.dismiss_enterprise_trial&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;, &quot;20652570897&quot;], &quot;id&quot;: &quot;20499722759&quot;, &quot;key&quot;: &quot;completed_all_tasks&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;, &quot;20652570897&quot;], &quot;id&quot;: &quot;20500710104&quot;, &quot;key&quot;: &quot;completed_onboarding_tasks&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20513160672&quot;, &quot;key&quot;: &quot;click.read_doc&quot;}, {&quot;experimentIds&quot;: [&quot;20652570897&quot;], &quot;id&quot;: &quot;20516196762&quot;, &quot;key&quot;: &quot;actions_enabled&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20518980986&quot;, &quot;key&quot;: &quot;click.dismiss_trial_banner&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20535446721&quot;, &quot;key&quot;: &quot;click.issue_actions_prompt.dismiss_prompt&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20557002247&quot;, &quot;key&quot;: &quot;click.issue_actions_prompt.setup_workflow&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20595070227&quot;, &quot;key&quot;: &quot;click.pull_request_setup_workflow&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20626600314&quot;, &quot;key&quot;: &quot;click.seats_input&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20642310305&quot;, &quot;key&quot;: &quot;click.decrease_seats_number&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20662990045&quot;, &quot;key&quot;: &quot;click.increase_seats_number&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20679620969&quot;, &quot;key&quot;: &quot;click.public_product_roadmap&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20761240940&quot;, &quot;key&quot;: &quot;click.dismiss_survey_banner&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20767210721&quot;, &quot;key&quot;: &quot;click.take_survey&quot;}, {&quot;experimentIds&quot;: [&quot;20652570897&quot;], &quot;id&quot;: &quot;20795281201&quot;, &quot;key&quot;: &quot;click.archive_list&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20966790249&quot;, &quot;key&quot;: &quot;contact_sales.submit&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20996500333&quot;, &quot;key&quot;: &quot;contact_sales.existing_customer&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20996890162&quot;, &quot;key&quot;: &quot;contact_sales.blank_message_field&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;21000470317&quot;, &quot;key&quot;: &quot;contact_sales.personal_email&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;21002790172&quot;, &quot;key&quot;: &quot;contact_sales.blank_phone_field&quot;}], &quot;revision&quot;: &quot;1020&quot;}" />
  <!-- To prevent page flashing, the optimizely JS needs to be loaded in the
    <head> tag before the DOM renders -->
  <script crossorigin="anonymous" defer="defer" integrity="sha512-stPGyO+GUOomTBqs1Y5EJnkYCf8cb/wFveUz/ncDr9XaP9olIwZerGQr4wFA3nBNqhbaqHsYbf0NfWJZ6XHjrg==" type="application/javascript" src="https://github.githubassets.com/assets/optimizely-b2d3c6c8.js"></script>



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="shaneziegler">


      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="YjFhZjE1MzAzNmQwOTI5NWRjNWRmY2IwMTAxOTAzYWFkZmM1NzY1YTViNTUyNWI3MGQ3MjhmNmVlNTMwOTY3Znx7InJlbW90ZV9hZGRyZXNzIjoiNjguNDYuODYuMTAzIiwicmVxdWVzdF9pZCI6IjhEMTU6MjZCNjozMUI4MEY2OjRDNjMwMUI6NjFEMDhBNjYiLCJ0aW1lc3RhbXAiOjE2NDEwNTY4NzgsImhvc3QiOiJnaXRodWIuY29tIn0=">
      <meta name="keyboard-shortcuts-preference" content="all">
      <script type="application/json" id="memex_keyboard_shortcuts_preference">"all"</script>

    <meta name="enabled-features" content="ACTIONS_CALLABLE_WORKFLOWS,MARKETPLACE_PENDING_INSTALLATIONS,LINKIFY_SELECTED_TEXT_ON_URL_PASTE,PRESENCE_IDLE">


  <meta http-equiv="x-pjax-version" content="2a0ed398d891434ebc5cd37a121dd8663578609e0ecf0d1b542fb263bb3ef861">
  <meta http-equiv="x-pjax-csp-version" content="9ea82e8060ac9d44365bfa193918b70ed58abd9413362ba412abb161b3a8d1b6">
  <meta http-equiv="x-pjax-css-version" content="8c06702a824b73d05c6dcbe160dc26951e0c3af9f2b6bd2c34681db7ef946a74">
  <meta http-equiv="x-pjax-js-version" content="996e21374117f01b7df2c1f75047cbdb09449e0572a60b7722454a61ba4735f6">
  

    
  <meta name="go-import" content="github.com/jefflovell/js109 git https://github.com/jefflovell/js109.git">

  <meta name="octolytics-dimension-user_id" content="25373023" /><meta name="octolytics-dimension-user_login" content="jefflovell" /><meta name="octolytics-dimension-repository_id" content="443447755" /><meta name="octolytics-dimension-repository_nwo" content="jefflovell/js109" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="443447755" /><meta name="octolytics-dimension-repository_network_root_nwo" content="jefflovell/js109" />



    <link rel="canonical" href="https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark" />

  <link rel="apple-touch-icon" href="https://github.githubassets.com/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://github.githubassets.com/apple-touch-icon-180x180.png">
  <meta name="apple-mobile-web-app-title" content="GitHub">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob" style="word-wrap: break-word;">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader js-pjax-loader-bar Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      


        <script crossorigin="anonymous" defer="defer" integrity="sha512-MDUFJmbSiwphTNfpo3oZQCuUAFBDXGIiUw3O9ooCZlquzcC1Zt5j1XtlZliqzlAJt5QxHkdMzBTQSrSXYSXnQQ==" type="application/javascript" src="https://github.githubassets.com/assets/command-palette-30350526.js"></script>

            <header class="Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap" role="banner" >
    <div class="Header-item mt-n1 mb-n1  d-none d-md-flex">
      <a
  class="Header-link "
  href="https://github.com/"
  data-hotkey="g d"
  aria-label="Homepage "
  data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="42958bd73e8e48d5b8445aac9a4ddd9e49ff9497ded0151f6d9aadd437d311d5" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}"
>
  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>

    </div>

    <div class="Header-item d-md-none">
      <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="Header-link js-details-target btn-link">  <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-three-bars">
    <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
</svg>
</button>    </div>

    <div class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
          



<div class="header-search flex-auto js-site-search position-relative flex-self-stretch flex-md-self-auto mb-3 mb-md-0 mr-0 mr-md-3 scoped-search site-scoped-search js-jump-to"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="443447755" data-scoped-search-url="/jefflovell/js109/search" data-owner-scoped-search-url="/users/jefflovell/search" data-unscoped-search-url="/search" action="/jefflovell/js109/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey=s,/
          name="q"
          data-test-selector="nav-search-input"
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
        >
        <input type="hidden" value="6RY7ytwJ4OvnSnDl62sINTdnZeeqZ/zCSgZFMMAXbuexpZN73n6kSWtNdnOj5heaqBsD9e3WMNm5RJ3Lhs3deA==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
        <input type="hidden" class="js-site-search-type-field" name="type" >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" class="mr-1 header-search-key-slash"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>


          <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
            
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="suggestion">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
      <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
</svg>
      <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
</svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="color-fg-muted">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="scoped_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
      <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
</svg>
      <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
</svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-owner-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="owner_scoped_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
      <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
</svg>
      <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
</svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this user">
        In this user
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="global_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg title="Repository" aria-label="Repository" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
      <svg title="Project" aria-label="Project" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
</svg>
      <svg title="Search" aria-label="Search" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0">
    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
</svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="m-3 anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
    </li>
</ul>

          </div>
      </label>
</form>  </div>
</div>

        <nav class="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto" aria-label="Global">
      <a class="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
        Dashboard
</a>
    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
        Pull<span class="d-inline d-md-none d-lg-inline"> request</span>s
</a>
    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
      Issues
</a>
      <div class="d-flex position-relative">
        <a class="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
          Marketplace
</a>      </div>

    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
      Explore
</a>
    <a class="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:workspaces context:user" data-selected-links="/codespaces /codespaces" href="/codespaces">
      Codespaces
</a>
      <a class="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:Sponsors" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;HEADER_SPONSORS_DASHBOARD&quot;,&quot;sponsorable_login&quot;:&quot;shaneziegler&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="d27741ebddedfcf078ccf8c2f9de457e42fbf3371a3142ad1269d5f561f3de6b" data-selected-links=" /sponsors/accounts" href="/sponsors/accounts">Sponsors</a>

    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade" href="/settings/profile">
      Settings
</a>
    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade" href="/shaneziegler">
      <img class="avatar avatar-user" loading="lazy" decoding="async" src="https://avatars.githubusercontent.com/u/56492231?s=40&amp;v=4" width="20" height="20" alt="@shaneziegler" />
      shaneziegler
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="dog2SNJb7tN1tc8LEu6dhhr0/AmePKfUjSKpVnx/iovwgKktwqwrPA1ZwSmFL1yJoqKWto5PPjSIyG+LBTxWyg==" />
      <button
        type="submit"
        class="Header-link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade d-md-none btn-link d-block width-full text-left"
        style="padding-left: 2px;"
        data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;sign out&quot;,&quot;label&quot;:&quot;icon:logout&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="52bd1f090472324c0f9dce9e72bd7f048f534357ed144b28bd5d4bd935d4c7b7" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;sign out&quot;,&quot;label&quot;:&quot;icon:logout&quot;}"
      >
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-sign-out v-align-middle">
    <path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path>
</svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
        <a
  class="Header-link "
  href="https://github.com/"
  data-hotkey="g d"
  aria-label="Homepage "
  data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="42958bd73e8e48d5b8445aac9a4ddd9e49ff9497ded0151f6d9aadd437d311d5" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}"
>
  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>

    </div>

    <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
        


      <notification-indicator
        class="js-socket-channel"
        data-test-selector="notifications-indicator"
        data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NTY0OTIyMzEiLCJ0IjoxNjQxMDU2ODc4fQ==--b970b9f73b58f64b2befcc7282e5db7115aa5e00d55ca26e88070d3cbe6d2a63">
        <a href="/notifications"
          class="Header-link notification-indicator position-relative tooltipped tooltipped-sw"
          
          aria-label="You have no unread notifications"
          data-hotkey="g n"
          data-ga-click="Header, go to notifications, icon:read"
          data-target="notification-indicator.link">
          <span class="mail-status  " data-target="notification-indicator.modifier"></span>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell">
    <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
</svg>
        </a>
      </notification-indicator>

    </div>


    <div class="Header-item position-relative d-none d-md-flex">
        <details class="details-overlay details-reset">
  <summary
    class="Header-link"
    aria-label="Create new…"
    data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;create new&quot;,&quot;label&quot;:&quot;icon:add&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="4f6de855c437061f5d3331f869c17b9eaf5c5cfcd3bc0ee46f2d43c1a8fd4992" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;create new&quot;,&quot;label&quot;:&quot;icon:add&quot;}"
  >
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path fill-rule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
</svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-md-flex">
        
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/shaneziegler/feature_preview/indicator_check">

  <summary
    class="Header-link"
    aria-label="View profile and more"
    data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;show menu&quot;,&quot;label&quot;:&quot;icon:avatar&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="a75dc1b297770816054145c24707e7d9ee33ce048df21bd33517d5240bd93489" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;show menu&quot;,&quot;label&quot;:&quot;icon:avatar&quot;}"
  >
    <img src="https://avatars.githubusercontent.com/u/56492231?s=40&amp;v=4" alt="@shaneziegler" size="20" height="20" width="20" data-view-component="true" class="avatar avatar-small circle" />
      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 1px;" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw" style="width: 180px" 
      src="/users/56492231/menu" preload>
      <include-fragment>
        <p class="text-center mt-3" data-hide-on-error>
          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
        </p>
        <p class="ml-1 mb-2 mt-2 color-fg-default" data-show-on-error>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
          Sorry, something went wrong.
        </p>
      </include-fragment>
  </details-menu>
</details>

    </div>
</header>

            
    </div>

  <div id="start-of-content" class="show-on-focus"></div>







    <div data-pjax-replace id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  {{ className }}">
  <div class=" px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    
      <div>{{ message }}</div>

  </div>
</div>
  </template>
</div>


    

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




      <details class="details-reset details-overlay details-overlay-dark js-command-palette-dialog">
  <summary class="command-palette-details-summary" aria-label="command palette trigger">
  </summary>
  <details-dialog class="command-palette-details-dialog d-flex flex-column flex-justify-center height-fit" aria-label="command palette">
    <command-palette
      class="command-palette color-bg-default rounded-3"
      data-return-to=/jefflovell/js109/blob/main/written-exam/exercises.md
      data-user-id="56492231"
      >
      <input type="hidden" value="nv2mLBgoXDmlV4VzDGn9x0NC+SfgX1Vszt1eRVyzXgM0ZQj0Re1DY0o0jpRzzJePk2yv4lRm8j78ltHUI6uSHA==" data-csrf="true" class="js-graphql-csrf" />
      <iframe class="d-none js-command-palette-commands" sandbox="allow-scripts allow-same-origin" srcdoc="<script crossorigin=&quot;anonymous&quot; defer=&quot;defer&quot; integrity=&quot;sha512-2Jz3lq/Gk0f8RePMFf+bUCfw6LwZ3nXfh3AQmMFOUj5cIW/rCeZcWRFO/q0l00bbLMcdXkpDj6KvP9Ny2qh8QA==&quot; type=&quot;application/javascript&quot; src=&quot;https://github.githubassets.com/assets/command-runner-d89cf796.js&quot;></script>
" aria-hidden="true" data-url="https://github.com"></iframe>
      <input type="hidden" name="color-mode-path" id="color-mode-path" value="/settings/appearance/color_mode" class="js-color-mode-path" autocomplete="off" />
      <input type="hidden" value="swBuW7GsrU5+LJbNuAtNLl40qQCCzzGWEEDrwyDVt3KKTbGZ7WpLEyVaEdMmAR0PeeQ7yW3iebXTGPMbIqhQxw==" data-csrf="true" class="js-color-mode-csrf" />

        <command-palette-mode
          data-char="#"
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search issues and pull requests"
        ></command-palette-mode>
        <command-palette-mode
          data-char="#"
            data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-placeholder="Search issues, pull requests, discussions, and projects"
        ></command-palette-mode>
        <command-palette-mode
          data-char="!"
            data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-placeholder="Search projects"
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search or jump to a user, organization, or repository"
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
            data-scope-types="[&quot;owner&quot;]"
            data-placeholder="Search or jump to a repository"
        ></command-palette-mode>
        <command-palette-mode
          data-char="/"
            data-scope-types="[&quot;repository&quot;]"
            data-placeholder="Search files"
        ></command-palette-mode>
        <command-palette-mode
          data-char="?"
        ></command-palette-mode>
        <command-palette-mode
          data-char="&gt;"
            data-placeholder="Run a command"
        ></command-palette-mode>
        <command-palette-mode
          data-char=""
            data-scope-types="[&quot;owner&quot;]"
            data-placeholder="Search or jump to..."
        ></command-palette-mode>
      <command-palette-mode
        class="js-command-palette-default-mode"
        data-char=""
        data-placeholder="Search or jump to..."
      ></command-palette-mode>

      <command-palette-input placeholder="Search or jump to..."
      >
        <div class="js-search-icon d-flex flex-items-center mr-2" style="height: 26px">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search color-fg-muted">
    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
</svg>
        </div>
        <div class="js-spinner d-flex flex-items-center mr-2 color-fg-muted" hidden>
          <svg aria-label="Loading" class="anim-rotate" viewBox="0 0 16 16" fill="none" width="16" height="16">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              stroke-opacity="0.25"
              stroke-width="2"
              vector-effect="non-scaling-stroke"
            ></circle>
            <path
              d="M15 8a7.002 7.002 0 00-7-7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
        <command-palette-scope >
              <command-palette-token
                data-text="jefflovell"
                data-id="MDQ6VXNlcjI1MzczMDIz"
                data-type="owner"
                data-value="jefflovell"
                data-targets="command-palette-scope.tokens"
                class="color-fg-default text-semibold"
                >jefflovell<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
              <command-palette-token
                data-text="js109"
                data-id="R_kgDOGm55yw"
                data-type="repository"
                data-value="js109"
                data-targets="command-palette-scope.tokens"
                class="color-fg-default text-semibold"
                >js109<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
        </command-palette-scope>
      </command-palette-input>

        <command-palette-item-stack id="command-palette-item-stack" class="item-stack-transition-height"  role="listbox" aria-label="Command palette results">
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-type="" data-mode="" data-value="">
            Type <code class="p-1 color-bg-subtle rounded-1">#</code> for issues and pull requests, <code class="p-1 color-bg-subtle rounded-1">></code> for commands, and <code class="p-1 color-bg-subtle rounded-1">?</code> for help
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-type="owner" data-mode="" data-value="">
            Type <code class="p-1 color-bg-subtle rounded-1">#</code> for issues, pull requests, and projects, <code class="p-1 color-bg-subtle rounded-1">></code> for commands, and <code class="p-1 color-bg-subtle rounded-1">?</code> for help
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-type="repository" data-mode="" data-value="">
            Type <code class="p-1 color-bg-subtle rounded-1">#</code> for issues, pull requests, and projects, <code class="p-1 color-bg-subtle rounded-1">/</code> for files, and <code class="p-1 color-bg-subtle rounded-1">></code> for commands
          </command-palette-tip>
          <command-palette-tip class="mx-3 my-2 flash flash-error d-flex flex-items-center" data-on-error>
            <div>
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
            </div>
            <div class="px-2">
              We’ve encountered an error and some results aren't available at this time. Type a new search or try again later.
            </div>
          </command-palette-tip>
          <command-palette-tip class="h4 color-fg-default pl-3 pb-2 pt-3" data-on-empty data-match-mode="[^?]|^$">
            No results matched your search
          </command-palette-tip>

            <command-palette-item-group
              data-group-id="top"
              data-group-title="Top result"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="commands"
              data-group-title="Commands"
              data-group-hint="Type &gt; to filter"
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="files"
              data-group-title="Files"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="pages"
              data-group-title="Pages"
              data-group-hint=""
              data-group-limits="{&quot;repository&quot;:10}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="access_policies"
              data-group-title="Access Policies"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="organizations"
              data-group-title="Organizations"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="repositories"
              data-group-title="Repositories"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="references"
              data-group-title="Issues, pull requests, and discussions"
              data-group-hint="Type # to filter"
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="teams"
              data-group-title="Teams"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="users"
              data-group-title="Users"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="projects"
              data-group-title="Projects"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="footer"
              data-group-title="Footer"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="modes_help"
              data-group-title="Modes"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="filters_help"
              data-group-title="Use filters in issues, pull requests, discussions, and projects"
              data-group-hint=""
              data-group-limits="{}"
              data-targets="command-palette-item-stack.groups"
            >
            </command-palette-item-group>
        </command-palette-item-stack>

      <div class="js-command-local-provider-octicons" hidden>
          <div data-local-provider-octicon-id="arrow-right-color-fg-muted">
            <svg height="16" class="octicon octicon-arrow-right color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="arrow-right-color-fg-default">
            <svg height="16" class="octicon octicon-arrow-right color-fg-default" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="codespaces-color-fg-muted">
            <svg height="16" class="octicon octicon-codespaces color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 1.75C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 01-1.75 1.75h-8.5A1.75 1.75 0 012 6.75v-5zm1.75-.25a.25.25 0 00-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-5a.25.25 0 00-.25-.25h-8.5zM0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25v-3zM1.75 11a.25.25 0 00-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-3a.25.25 0 00-.25-.25H1.75z"></path><path fill-rule="evenodd" d="M3 12.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zm4 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="copy-color-fg-muted">
            <svg height="16" class="octicon octicon-copy color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="dash-color-fg-muted">
            <svg height="16" class="octicon octicon-dash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 7.75A.75.75 0 012.75 7h10a.75.75 0 010 1.5h-10A.75.75 0 012 7.75z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="file-color-fg-muted">
            <svg height="16" class="octicon octicon-file color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="lock-color-fg-muted">
            <svg height="16" class="octicon octicon-lock color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="moon-color-fg-muted">
            <svg height="16" class="octicon octicon-moon color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="person-color-fg-muted">
            <svg height="16" class="octicon octicon-person color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="pencil-color-fg-muted">
            <svg height="16" class="octicon octicon-pencil color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="issue-opened-open">
            <svg height="16" class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="git-pull-request-draft-color-fg-muted">
            <svg height="16" class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.25 1a2.25 2.25 0 00-.75 4.372v5.256a2.251 2.251 0 101.5 0V5.372A2.25 2.25 0 003.25 1zm0 11a.75.75 0 100 1.5.75.75 0 000-1.5zm9.5 3a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"></path><path d="M14 7.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm0-4.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="search-color-fg-muted">
            <svg height="16" class="octicon octicon-search color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="sun-color-fg-muted">
            <svg height="16" class="octicon octicon-sun color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="sync-color-fg-muted">
            <svg height="16" class="octicon octicon-sync color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="trash-color-fg-muted">
            <svg height="16" class="octicon octicon-trash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="key-color-fg-muted">
            <svg height="16" class="octicon octicon-key color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="comment-discussion-color-fg-muted">
            <svg height="16" class="octicon octicon-comment-discussion color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="bell-color-fg-muted">
            <svg height="16" class="octicon octicon-bell color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path></svg>
          </div>
          <div data-local-provider-octicon-id="bell-slash-color-fg-muted">
            <svg height="16" class="octicon octicon-bell-slash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 014.38 1.55 5 5 0 0113 5v2.373a.75.75 0 01-1.5 0V5A3.5 3.5 0 008 1.5zM4.182 4.31L1.19 2.143a.75.75 0 10-.88 1.214L3 5.305v2.642a.25.25 0 01-.042.139L1.255 10.64A1.518 1.518 0 002.518 13h11.108l1.184.857a.75.75 0 10.88-1.214l-1.375-.996a1.196 1.196 0 00-.013-.01L4.198 4.321a.733.733 0 00-.016-.011zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01.015.015 0 00.005.012.017.017 0 00.006.004l.007.001h9.037zM8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path></svg>
          </div>
      </div>

      <server-defined-provider data-type="search-links"></server-defined-provider>
      <server-defined-provider data-type="help">
          <command-palette-help
            data-group="modes_help"
              data-prefix="#"
              data-scope-types="[&quot;&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>issues</strong> and <strong>pull requests</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="#"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>issues, pull requests, discussions,</strong> and <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="@"
              data-scope-types="[&quot;&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>organizations, repositories,</strong> and <strong>users</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">@</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="!"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">!</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="/"
              data-scope-types="[&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>files</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">/</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="&gt;"
          >
            <span data-target="command-palette-help.titleElement">Activate <strong>command mode</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">&gt;</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# author:@me"
          >
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# author:@me"
          >
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:pr"
          >
            <span data-target="command-palette-help.titleElement">Filter to pull requests</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:pr</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:issue"
          >
            <span data-target="command-palette-help.titleElement">Filter to issues</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:issue</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:discussion"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Filter to discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:discussion</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:project"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Filter to projects</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:project</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:open"
          >
            <span data-target="command-palette-help.titleElement">Filter to open issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:open</kbd>
              </span>
          </command-palette-help>
      </server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/commands"
          data-supported-modes="[&quot;&gt;&quot;]"
            data-supports-commands
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/jump_to_page_navigation"
          data-supported-modes="[&quot;&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/issues"
          data-supported-modes="[&quot;#&quot;,&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/jump_to"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/jump_to_members_only"
          data-supported-modes="[&quot;&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/jump_to_members_only_prefetched"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="files"
          data-fetch-debounce="0"
            data-src="/command_palette/files"
          data-supported-modes="[&quot;/&quot;]"
            data-supported-scope-types="[&quot;repository&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/discussions"
          data-supported-modes="[&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/projects"
          data-supported-modes="[&quot;#&quot;,&quot;!&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/recent_issues"
          data-supported-modes="[&quot;#&quot;,&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/teams"
          data-supported-modes="[&quot;@&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;owner&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/name_with_owner_repository"
          data-supported-modes="[&quot;&quot;]"
          
          ></server-defined-provider>
        <server-defined-provider
          data-type="main-window-commands"
          data-fetch-debounce="0"
          data-supported-modes="[&quot;&gt;&quot;]"
            data-supports-commands
          
          ></server-defined-provider>
    </command-palette>
  </details-dialog>
</details>

<div class="position-fixed bottom-0 left-0 ml-5 mb-5 js-command-palette-toasts" style="z-index: 1000">
  <div hidden class="Toast Toast--loading">
    <span class="Toast-icon">
      <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <path
          fill="#959da5"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
      </svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast Toast--error">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-stop">
    <path fill-rule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast Toast--warning">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>


  <div hidden class="anim-fade-in fast Toast Toast--success">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-info">
    <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>
</div>

      <div hidden class="js-command-palette-pjax-meta-data" data-pjax-replace id="command-palette-pjax-meta-data"
    data-subject-id="R_kgDOGm55yw"
    data-subject-type="Repository"
>
</div>


  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container >
      

    







  <div id="repository-container-header" class="pt-3 hide-full-screen mb-5" style="background-color: var(--color-page-header-bg);" data-pjax-replace>

      <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">

        <div class="flex-auto min-width-0 width-fit mr-3">
            <h1 class=" d-flex flex-wrap flex-items-center wb-break-word f3 text-normal">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo color-fg-muted mr-2">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
  <span class="author flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/jefflovell/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jefflovell">jefflovell</a>
  </span>
  <span class="mx-1 flex-self-stretch color-fg-muted">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#repo-content-pjax-container" href="/jefflovell/js109">js109</a>
  </strong>

  <span></span><span class="Label Label--secondary v-align-middle mr-1">Public</span>
</h1>

        </div>

          <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">

  <li>
        <notifications-list-subscription-form class="f5 position-relative ">
      <details
        class="details-reset details-overlay f5 position-relative"
        data-target="notifications-list-subscription-form.details"
        data-action="toggle:notifications-list-subscription-form#detailsToggled"
      >

      <summary data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="7f5446f31a72641416e157ddc93766f35f4cf270a13933f3a0cd298517ff9525" data-ga-click="Repository, click Watch settings, action:blob#show" aria-label="Notification settings" data-view-component="true" class="btn-sm btn">  <span data-menu-button>
            <span
              hidden
              
              data-target="notifications-list-subscription-form.unwatchButtonCopy"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye">
    <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
</svg>
              Unwatch
            </span>
            <span
              hidden
              
              data-target="notifications-list-subscription-form.stopIgnoringButtonCopy"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell-slash">
    <path fill-rule="evenodd" d="M8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 014.38 1.55 5 5 0 0113 5v2.373a.75.75 0 01-1.5 0V5A3.5 3.5 0 008 1.5zM4.182 4.31L1.19 2.143a.75.75 0 10-.88 1.214L3 5.305v2.642a.25.25 0 01-.042.139L1.255 10.64A1.518 1.518 0 002.518 13h11.108l1.184.857a.75.75 0 10.88-1.214l-1.375-.996a1.196 1.196 0 00-.013-.01L4.198 4.321a.733.733 0 00-.016-.011zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01.015.015 0 00.005.012.017.017 0 00.006.004l.007.001h9.037zM8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
</svg>
              Stop ignoring
            </span>
            <span
              
              
              data-target="notifications-list-subscription-form.watchButtonCopy"
            >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye">
    <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
</svg>
              Watch
            </span>
          </span>
            <span id="repo-notifications-counter" data-target="notifications-list-subscription-form.socialCount" data-pjax-replace="true" title="1" data-view-component="true" class="Counter">1</span>
          <span class="dropdown-caret"></span>
</summary>
        <details-menu
          class="SelectMenu  "
          role="menu"
          data-target="notifications-list-subscription-form.menu"
          
        >
          <div class="SelectMenu-modal notifications-component-menu-modal">
            <header class="SelectMenu-header">
              <h3 class="SelectMenu-title">Notifications</h3>
              <button class="SelectMenu-closeButton" type="button" aria-label="Close menu" data-action="click:notifications-list-subscription-form#closeMenu">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
              </button>
            </header>

            <div class="SelectMenu-list">
              <form data-target="notifications-list-subscription-form.form" data-action="submit:notifications-list-subscription-form#submitForm" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="0Hu2zQulWFuOTBYhcqy8SFx5IE/RoUhC4vbcFuvP8q7jSlhqmWZhdfUvHEQE7tliHSVMhPo1WLIANONWAQwTVA==" autocomplete="off" />

                <input type="hidden" name="repository_id" value="443447755">

                <button
                  type="submit"
                  name="do"
                  value="included"
                  class="SelectMenu-item flex-items-start"
                  role="menuitemradio"
                  aria-checked="true"
                  data-targets="notifications-list-subscription-form.subscriptionButtons"
                  
                >
                  <span class="f5">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
                  </span>
                  <div>
                    <div class="f5 text-bold">
                      Participating and @mentions
                    </div>
                    <div class="text-small color-fg-muted text-normal pb-1">
                      Only receive notifications from this repository when participating or @mentioned.
                    </div>
                  </div>
                </button>

                <button
                  type="submit"
                  name="do"
                  value="subscribed"
                  class="SelectMenu-item flex-items-start"
                  role="menuitemradio"
                  aria-checked="false"
                  data-targets="notifications-list-subscription-form.subscriptionButtons"
                >
                  <span class="f5">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
                  </span>
                  <div>
                    <div class="f5 text-bold">
                      All Activity
                    </div>
                    <div class="text-small color-fg-muted text-normal pb-1">
                      Notified of all notifications on this repository.
                    </div>
                  </div>
                </button>

                <button
                  type="submit"
                  name="do"
                  value="ignore"
                  class="SelectMenu-item flex-items-start"
                  role="menuitemradio"
                  aria-checked="false"
                  data-targets="notifications-list-subscription-form.subscriptionButtons"
                >
                  <span class="f5">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
                  </span>
                  <div>
                    <div class="f5 text-bold">
                      Ignore
                    </div>
                    <div class="text-small color-fg-muted text-normal pb-1">
                      Never be notified.
                    </div>
                  </div>
                </button>
</form>
              <button
                class="SelectMenu-item flex-items-start pr-3"
                type="button"
                role="menuitemradio"
                data-target="notifications-list-subscription-form.customButton"
                data-action="click:notifications-list-subscription-form#openCustomDialog"
                aria-haspopup="true"
                aria-checked="false"
                
              >
                <span class="f5">
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
                </span>
                <div>
                  <div class="d-flex flex-items-start flex-justify-between">
                    <div class="f5 text-bold">Custom</div>
                    <div class="f5 pr-1">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-arrow-right">
    <path fill-rule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path>
</svg>
                    </div>
                  </div>
                  <div class="text-small color-fg-muted text-normal pb-1">
                    Select events you want to be notified of in addition to participating and @mentions.
                  </div>
                </div>
              </button>

                <div class="px-3 py-2 d-flex color-bg-subtle flex-items-center">
                  <span class="f5">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-mobile SelectMenu-icon SelectMenu-icon--device-mobile">
    <path fill-rule="evenodd" d="M3.75 0A1.75 1.75 0 002 1.75v12.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 14.25V1.75A1.75 1.75 0 0012.25 0h-8.5zM3.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25V1.75zM8 13a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
                  </span>
                  <span className="text-small color-fg-muted text-normal pb-1">
                    Get push notifications on <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/app/apple-store/id1477376905?ct=watch-dropdown&amp;mt=8&amp;pt=524675">iOS</a> or <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.github.android&amp;referrer=utm_campaign%3Dwatch-dropdown%26utm_medium%3Dweb%26utm_source%3Dgithub">Android</a>.
                  </span>
                </div>
            </div>
          </div>
        </details-menu>

        <details-dialog class="notifications-component-dialog " data-target="notifications-list-subscription-form.customDialog" hidden>
          <div class="SelectMenu-modal notifications-component-dialog-modal overflow-visible">
            <form data-target="notifications-list-subscription-form.customform" data-action="submit:notifications-list-subscription-form#submitCustomForm" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="6FZBNMnv1Qk2i3jkbBB1bbn/rlkgIpRI7P4I2D3gZijbZ6+TWyzsJ03ocoEaUhBH+KPCkgu2hLgOPDeY1yOH0g==" autocomplete="off" />

              <input type="hidden" name="repository_id" value="443447755">

              <header class="d-sm-none SelectMenu-header pb-0 border-bottom-0 px-2 px-sm-3">
                <h1 class="f3 SelectMenu-title d-inline-flex">
                  <button
                    class="color-bg-default border-0 px-2 py-0 m-0 Link--secondary f5"
                    aria-label="Return to menu"
                    type="button"
                    data-action="click:notifications-list-subscription-form#closeCustomDialog"
                  >
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-arrow-left">
    <path fill-rule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path>
</svg>
                  </button>
                  Custom
                </h1>
              </header>

              <header class="d-none d-sm-flex flex-items-start pt-1">
                <button
                  class="border-0 px-2 pt-1 m-0 Link--secondary f5"
                  style="background-color: transparent;"
                  aria-label="Return to menu"
                  type="button"
                  data-action="click:notifications-list-subscription-form#closeCustomDialog"
                >
                  <svg style="position: relative; left: 2px; top: 1px" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-arrow-left">
    <path fill-rule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path>
</svg>
                </button>

                <h1 class="pt-1 pr-4 pb-0 pl-0 f5 text-bold">
                  Custom
                </h1>
              </header>

              <fieldset>
                <legend>
                  <div class="text-small color-fg-muted pt-0 pr-3 pb-3 pl-6 pl-sm-5 border-bottom mb-3">
                    Select events you want to be notified of in addition to participating and @mentions.
                  </div>
                </legend>
                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                    <label class="f5 text-normal">
                      <input
                        type="checkbox"
                        name="thread_types[]"
                        value="Issue"
                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                        
                      >
                      Issues
                    </label>

                  </div>
                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                    <label class="f5 text-normal">
                      <input
                        type="checkbox"
                        name="thread_types[]"
                        value="PullRequest"
                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                        
                      >
                      Pull requests
                    </label>

                  </div>
                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                    <label class="f5 text-normal">
                      <input
                        type="checkbox"
                        name="thread_types[]"
                        value="Release"
                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                        
                      >
                      Releases
                    </label>

                  </div>
                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                    <label class="f5 text-normal">
                      <input
                        type="checkbox"
                        name="thread_types[]"
                        value="Discussion"
                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                        
                      >
                      Discussions
                    </label>

                      <span
                        class="tooltipped tooltipped-nw mr-2 p-1 float-right"
                        
                        aria-label="Discussions are not enabled for this repo">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-info color-fg-muted">
    <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
                      </span>
                  </div>
                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
                    <label class="f5 text-normal">
                      <input
                        type="checkbox"
                        name="thread_types[]"
                        value="SecurityAlert"
                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
                        
                      >
                      Security alerts
                    </label>

                  </div>
              </fieldset>
              <div class="pt-2 pb-3 px-3 d-flex flex-justify-start flex-row-reverse">
                <button name="do" value="custom" data-target="notifications-list-subscription-form.customSubmit" disabled="disabled" type="submit" data-view-component="true" class="btn-primary btn-sm btn ml-2">  Apply
</button>

                <button data-action="click:notifications-list-subscription-form#resetForm" data-close-dialog="" type="button" data-view-component="true" class="btn-sm btn">  Cancel
</button>
              </div>
</form>          </div>
        </details-dialog>
        <div class="notifications-component-dialog-overlay"></div>
      </details>
    </notifications-list-subscription-form>



  </li>


    <li>
              <form class="btn-with-count" action="/jefflovell/js109/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="OOCSAV8i2ZvBhWSIVdQvdsOH/5xy15mtyyb+WTdXX5gMYQn2sFhk6qiNaM33FjaCh2ALDQ1Vw3oyGNQkKoYd+w==" autocomplete="off" />
        <button data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="0200e1d257faadbd7fa620e7edad3f48288459b28e05943a84cf5d9601d6db39" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" aria-label="Fork your own copy of jefflovell/js109 to your account" type="submit" data-view-component="true" class="btn-sm btn">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg>Fork
            <span id="repo-network-counter" data-pjax-replace="true" title="0" data-view-component="true" class="Counter">0</span>
</button></form>

    </li>

    <li>
          
  <div data-view-component="true" class="js-toggler-container js-social-container starring-container BtnGroup d-flex">
    <form class="starred js-social-form BtnGroup-parent flex-auto" action="/jefflovell/js109/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="J+Oscm7H8einz1xzacjksV3Wk2Fvh9P1ySv9P/grrGMTOiy4de+AU2CBf5d4xC79IK2yjFxphW/vrwNIkijAVw==" autocomplete="off" />
      <input type="hidden" name="context" value="repository">
      <button data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="6fb53cd5019717010471ae953971bb31d83ac686bc1487029599cf47e95f2974" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar" aria-label="Unstar this repository" type="submit" data-view-component="true" class="js-toggler-target rounded-left-2 border-right-0 btn-sm btn BtnGroup-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star-fill starred-button-icon d-inline-block mr-2">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
</svg><span data-view-component="true" class="d-inline">
          Starred
</span>          <span id="repo-stars-counter-unstar" aria-label="0 users starred this repository" data-singular-suffix="user starred this repository" data-plural-suffix="users starred this repository" data-pjax-replace="true" title="0" data-view-component="true" class="Counter js-social-count">0</span>
</button></form>
    <form class="unstarred js-social-form BtnGroup-parent flex-auto" action="/jefflovell/js109/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="axXb/tgOivq5QBakXSMZDye0QFuGfosPFGVVmn10RVaIjsoBU+6Yt1YNwbwWavNSN0lFIUf3f8StQejQ1eZVBg==" autocomplete="off" />
      <input type="hidden" name="context" value="repository">
      <button data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="41d097bcaf8f6f073e105396a460e3ea6cfb38dbe00144bcfa5c972d46cc2f19" data-ga-click="Repository, click star button, action:blob#show; text:Star" aria-label="Star this repository" type="submit" data-view-component="true" class="js-toggler-target rounded-left-2 btn-sm btn BtnGroup-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block mr-2">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg><span data-view-component="true" class="d-inline">
          Star
</span>          <span id="repo-stars-counter-star" aria-label="0 users starred this repository" data-singular-suffix="user starred this repository" data-plural-suffix="users starred this repository" data-pjax-replace="true" title="0" data-view-component="true" class="Counter js-social-count">0</span>
</button></form>
      <details id="details-64934d" data-view-component="true" class="details-reset details-overlay BtnGroup-parent js-user-list-menu d-inline-block position-relative">
      <summary aria-label="Add this repository to a list" data-view-component="true" class="btn-sm btn BtnGroup-item px-2 float-none">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
</svg>
</summary>    <template class="js-user-list-create-dialog-template" data-label="Create list">
  <div class="Box-header">
    <h2 class="Box-title">Create list</h2>
  </div>
  <form class="Box-body d-flex flex-column p-3 js-user-list-form" action="/stars/shaneziegler/lists" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="IcLsfViOlw/DODMt501VDM9wdZCeNTEd+Xd0sCVBulmbIi5IIfkiDFdRZWQJ7ny0pYbI8Utp1EsU2hCnZ2JrVg==" autocomplete="off" />
        <p class="color-fg-subtle mb-3">Create a list to organize your starred repositories.</p>
      <input type="hidden" name="repository_id" value="{{ repositoryId }}">

  <div class="form-group mx-0 mt-0 mb-2 js-user-list-input-container js-characters-remaining-container position-relative">
    <auto-check src="/stars/shaneziegler/list-check?attr=name" required>
      <text-expander keys=":" data-emoji-url="/autocomplete/emoji">
        <input
          type="text"
          name="user_list[name]"
          class="form-control js-user-list-input js-characters-remaining-field"
          placeholder="⭐️ Name this list"
          value=""
          aria-label="List name"
          maxlength="32"
          data-maxlength="32"
          autofocus
          required
        >
      </text-expander>
      <input type="hidden" value="B+SywgjLRI0Hz44uo7REe3TwCjqNGBHwR96dnvzwuW1/NlKs7N3GvU5I9Ac7LWycQ+6eXG6LYl7wIJwPY+ex1Q==" data-csrf="true" />
    </auto-check>
    <p
      class="note error position-relative js-user-list-error"
       hidden
    >
      Name .
    </p>
    <p class="mt-1 text-small float-right js-characters-remaining" data-suffix="remaining" hidden>
      32 remaining
    </p>
  </div>
  <div class="form-group mx-0 mt-0 mb-2 js-user-list-input-container js-characters-remaining-container position-relative">
    <text-expander keys=":" data-emoji-url="/autocomplete/emoji">
      <textarea
        name="user_list[description]"
        class="form-control js-user-list-input js-characters-remaining-field"
        placeholder="Write a description"
        aria-label="List description"
        maxlength="160"
        data-maxlength="160"
        style="height: 74px; min-height: 74px"
      ></textarea>
    </text-expander>
    <p
      class="note error position-relative js-user-list-error"
       hidden
    >
      Description .
    </p>
    <p class="mt-1 text-small float-right js-characters-remaining" data-suffix="remaining" hidden>
      160 remaining
    </p>
  </div>
  <div hidden="hidden" data-generic-message="Unable to save your list at this time." data-view-component="true" class="js-user-list-base flash flash-error mx-0 mt-0 mb-2">
  
  
    .


  
</div>      <button disabled="disabled" data-disable-invalid="true" data-submitting-message="Creating..." type="submit" data-view-component="true" class="btn-primary btn btn-block mt-2">  Create
</button>

  <p class="note mt-2 mb-0">
    <strong>Tip:</strong> type <code>:</code> to add emoji to the name or description.
  </p>
</form>
  <div data-view-component="true" class="Box-footer Box-row--gray text-small color-fg-muted d-flex flex-items-baseline py-2">
  <span title="Feature Release Label: Beta" aria-label="Feature Release Label: Beta" data-view-component="true" class="Label Label--success Label--inline px-2 mr-2">Beta</span>
  <span class="mr-1">Lists are currently in beta.</span>
  <a href="/github/feedback/discussions/categories/lists-feedback">Share feedback and report bugs.</a>
</div>
</template>


  <details-menu
    class="SelectMenu right-0"
      src="/jefflovell/js109/lists"
      
      role="menu"
      
>
    <div class="SelectMenu-modal">
        <button class="SelectMenu-closeButton position-absolute right-0 m-2" type="button" aria-label="Close menu" data-toggle-for="details-64934d">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
        </button>
      <div
        id="filter-menu-64934d"
        class="d-flex flex-column flex-1 overflow-hidden"
>
        <div
          class="SelectMenu-list"
          >

            <include-fragment class="SelectMenu-loading" aria-label="Loading">
              <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
            </include-fragment>
        </div>
        
      </div>
    </div>
  </details-menu>
</details>
</div>
    </li>


  <li>
    

  </li>
</ul>

      </div>

      <div id="responsive-meta-container" data-pjax-replace>
</div>


        
<nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="/jefflovell/js109" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /jefflovell/js109" data-pjax="#repo-content-pjax-container" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
</svg>
          <span data-content="Code">Code</span>
            <span id="code-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="/jefflovell/js109/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /jefflovell/js109/issues" data-pjax="#repo-content-pjax-container" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
</svg>
          <span data-content="Issues">Issues</span>
            <span id="issues-repo-tab-count" data-pjax-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="/jefflovell/js109/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /jefflovell/js109/pulls" data-pjax="#repo-content-pjax-container" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
</svg>
          <span data-content="Pull requests">Pull requests</span>
            <span id="pull-requests-repo-tab-count" data-pjax-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="/jefflovell/js109/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /jefflovell/js109/actions" data-pjax="#repo-content-pjax-container" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>
</svg>
          <span data-content="Actions">Actions</span>
            <span id="actions-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="/jefflovell/js109/projects?type=beta" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /jefflovell/js109/projects?type=beta" data-pjax="#repo-content-pjax-container" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
</svg>
          <span data-content="Projects">Projects</span>
            <span id="projects-repo-tab-count" data-pjax-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="wiki-tab" href="/jefflovell/js109/wiki" data-tab-item="i5wiki-tab" data-selected-links="repo_wiki /jefflovell/js109/wiki" data-pjax="#repo-content-pjax-container" data-hotkey="g w" data-ga-click="Repository, Navigation click, Wikis tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline">
    <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
</svg>
          <span data-content="Wiki">Wiki</span>
            <span id="wiki-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="/jefflovell/js109/security" data-tab-item="i6security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /jefflovell/js109/security" data-pjax="#repo-content-pjax-container" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
</svg>
          <span data-content="Security">Security</span>
            <include-fragment src="/jefflovell/js109/security/overall-count" accept="text/fragment+html"></include-fragment>

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="/jefflovell/js109/pulse" data-tab-item="i7insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /jefflovell/js109/pulse" data-pjax="#repo-content-pjax-container" data-ga-click="Repository, Navigation click, Insights tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>
</svg>
          <span data-content="Insights">Insights</span>
            <span id="insights-repo-tab-count" data-pjax-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <details data-view-component="true" class="details-overlay details-reset position-relative">
  <summary role="button" data-view-component="true">          <div class="UnderlineNav-item mr-0 border-0">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
            <span class="sr-only">More</span>
          </div>
</summary>
  <div data-view-component="true">          <details-menu role="menu" data-view-component="true" class="dropdown-menu dropdown-menu-sw">
  
            <ul>
                <li data-menu-item="i0code-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item selected dropdown-item" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /jefflovell/js109" href="/jefflovell/js109">
                    Code
</a>                </li>
                <li data-menu-item="i1issues-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_issues repo_labels repo_milestones /jefflovell/js109/issues" href="/jefflovell/js109/issues">
                    Issues
</a>                </li>
                <li data-menu-item="i2pull-requests-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_pulls checks /jefflovell/js109/pulls" href="/jefflovell/js109/pulls">
                    Pull requests
</a>                </li>
                <li data-menu-item="i3actions-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_actions /jefflovell/js109/actions" href="/jefflovell/js109/actions">
                    Actions
</a>                </li>
                <li data-menu-item="i4projects-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_projects new_repo_project repo_project /jefflovell/js109/projects?type=beta" href="/jefflovell/js109/projects?type=beta">
                    Projects
</a>                </li>
                <li data-menu-item="i5wiki-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_wiki /jefflovell/js109/wiki" href="/jefflovell/js109/wiki">
                    Wiki
</a>                </li>
                <li data-menu-item="i6security-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="security overview alerts policy token_scanning code_scanning /jefflovell/js109/security" href="/jefflovell/js109/security">
                    Security
</a>                </li>
                <li data-menu-item="i7insights-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /jefflovell/js109/pulse" href="/jefflovell/js109/pulse">
                    Insights
</a>                </li>
            </ul>

</details-menu></div>
</details></div>
</nav>
  </div>



<div class="clearfix new-discussion-timeline container-xl px-3 px-md-4 px-lg-5">
  <div id="repo-content-pjax-container" class="repository-content " >

      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank">Open in a new github.dev tab</a>



    
      
  
  
<div>
  



    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/jefflovell/js109/blob/fb3d2ba5fa35ab3c412fef84c7c3c4417cca9e36/written-exam/exercises.md">Permalink</a>


    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
      
<div class="position-relative">
  <details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
    <summary class="btn css-truncate"
            data-hotkey="w"
            title="Switch branches or tags">
      <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-branch">
    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
</svg>
      <span class="css-truncate-target" data-menu-button>main</span>
      <span class="dropdown-caret"></span>
    </summary>

      
<div class="SelectMenu">
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Switch branches/tags</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="branch-select-menu"><svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg></button>
    </header>

    <input-demux data-action="tab-container-change:input-demux#storeInput tab-container-changed:input-demux#updateInput">
      <tab-container class="d-flex flex-column js-branches-tags-tabs" style="min-height: 0;">
        <div class="SelectMenu-filter">
          <input data-target="input-demux.source"
                 id="context-commitish-filter-field"
                 class="SelectMenu-input form-control"
                 aria-owns="ref-list-branches"
                 data-controls-ref-menu-id="ref-list-branches"
                 autofocus
                 autocomplete="off"
                 aria-label="Filter branches/tags"
                 placeholder="Filter branches/tags"
                 type="text"
          >
        </div>

        <div class="SelectMenu-tabs" role="tablist" data-target="input-demux.control" >
          <button class="SelectMenu-tab" type="button" role="tab" aria-selected="true">Branches</button>
          <button class="SelectMenu-tab" type="button" role="tab">Tags</button>
        </div>

        <div role="tabpanel" id="ref-list-branches" data-filter-placeholder="Filter branches/tags" class="d-flex flex-column flex-auto overflow-auto" tabindex="">
          <ref-selector
            type="branch"
            data-targets="input-demux.sinks"
            data-action="
              input-entered:ref-selector#inputEntered
              tab-selected:ref-selector#tabSelected
              focus-list:ref-selector#focusFirstListMember
            "
            query-endpoint="/jefflovell/js109/refs"
            
            cache-key="v0:1640997850.3871849"
            current-committish="bWFpbg=="
            default-branch="bWFpbg=="
            name-with-owner="amVmZmxvdmVsbC9qczEwOQ=="
            prefetch-on-mouseover
          >

            <template data-target="ref-selector.fetchFailedTemplate">
              <div class="SelectMenu-message" data-index="{{ index }}">Could not load branches</div>
            </template>

              <template data-target="ref-selector.noMatchTemplate">
    <div class="SelectMenu-message">Nothing to show</div>
</template>


            <!-- TODO: this max-height is necessary or else the branch list won't scroll.  why? -->
            <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list " style="max-height: 330px" data-pjax="#repo-content-pjax-container">
              <div class="SelectMenu-loading pt-3 pb-0 overflow-hidden" aria-label="Menu is loading">
                <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
              </div>
            </div>

              <template data-target="ref-selector.itemTemplate">
  <a href="https://github.com/jefflovell/js109/blob/{{ urlEncodedRefName }}/written-exam/exercises.md" class="SelectMenu-item" role="menuitemradio" rel="nofollow" aria-checked="{{ isCurrent }}" data-index="{{ index }}">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    <span class="flex-1 css-truncate css-truncate-overflow {{ isFilteringClass }}">{{ refName }}</span>
    <span hidden="{{ isNotDefault }}" class="Label Label--secondary flex-self-start">default</span>
  </a>
</template>


              <footer class="SelectMenu-footer"><a href="/jefflovell/js109/branches">View all branches</a></footer>
          </ref-selector>

        </div>

        <div role="tabpanel" id="tags-menu" data-filter-placeholder="Find a tag" class="d-flex flex-column flex-auto overflow-auto" tabindex="" hidden>
          <ref-selector
            type="tag"
            data-action="
              input-entered:ref-selector#inputEntered
              tab-selected:ref-selector#tabSelected
              focus-list:ref-selector#focusFirstListMember
            "
            data-targets="input-demux.sinks"
            query-endpoint="/jefflovell/js109/refs"
            cache-key="v0:1640997850.3871849"
            current-committish="bWFpbg=="
            default-branch="bWFpbg=="
            name-with-owner="amVmZmxvdmVsbC9qczEwOQ=="
          >

            <template data-target="ref-selector.fetchFailedTemplate">
              <div class="SelectMenu-message" data-index="{{ index }}">Could not load tags</div>
            </template>

            <template data-target="ref-selector.noMatchTemplate">
              <div class="SelectMenu-message" data-index="{{ index }}">Nothing to show</div>
            </template>

              <template data-target="ref-selector.itemTemplate">
  <a href="https://github.com/jefflovell/js109/blob/{{ urlEncodedRefName }}/written-exam/exercises.md" class="SelectMenu-item" role="menuitemradio" rel="nofollow" aria-checked="{{ isCurrent }}" data-index="{{ index }}">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    <span class="flex-1 css-truncate css-truncate-overflow {{ isFilteringClass }}">{{ refName }}</span>
    <span hidden="{{ isNotDefault }}" class="Label Label--secondary flex-self-start">default</span>
  </a>
</template>


            <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list" style="max-height: 330px" data-pjax="#repo-content-pjax-container">
              <div class="SelectMenu-loading pt-3 pb-0 overflow-hidden" aria-label="Menu is loading">
                <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
              </div>
            </div>
              <footer class="SelectMenu-footer"><a href="/jefflovell/js109/tags">View all tags</a></footer>
          </ref-selector>
        </div>
      </tab-container>
    </input-demux>
  </div>
</div>

  </details>

</div>

      <h2 id="blob-path" class="breadcrumb flex-auto flex-self-center min-width-0 text-normal mx-2 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/jefflovell/js109"><span>js109</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/jefflovell/js109/tree/main/written-exam"><span>written-exam</span></a></span><span class="separator">/</span><strong class="final-path">exercises.md</strong>
      </h2>
      <a href="/jefflovell/js109/find/main"
            class="js-pjax-capture-input btn mr-2 d-none d-md-block"
            data-pjax
            data-hotkey="t">
        Go to file
      </a>

      <details id="blob-more-options-details" data-view-component="true" class="details-overlay details-reset position-relative">
  <summary role="button" data-view-component="true" class="btn">  <svg aria-label="More options" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
</summary>
  <div data-view-component="true">          <ul class="dropdown-menu dropdown-menu-sw">
            <li class="d-block d-md-none">
              <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="ff828fd3a8a0dd4f03d1f7ea9d05d4932fc0582937c0a9e3f5ad8dafaa9ba1bc" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/jefflovell/js109/find/main">
                <span class="flex-auto">Go to file</span>
                <span class="text-small color-fg-muted" aria-hidden="true">T</span>
</a>            </li>
            <li data-toggle-for="blob-more-options-details">
              <button data-toggle-for="jumpto-line-details-dialog" type="button" data-view-component="true" class="dropdown-item btn-link">  <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Go to line</span>
                  <span class="text-small color-fg-muted" aria-hidden="true">L</span>
                </span>
</button>            </li>
            <li class="dropdown-divider" role="none"></li>
            <li>
              <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy path" value="written-exam/exercises.md" data-view-component="true" class="dropdown-item cursor-pointer">
    
                Copy path

</clipboard-copy>            </li>
            <li>
              <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy permalink" value="https://github.com/jefflovell/js109/blob/fb3d2ba5fa35ab3c412fef84c7c3c4417cca9e36/written-exam/exercises.md" data-view-component="true" class="dropdown-item cursor-pointer">
    
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Copy permalink</span>
                </span>

</clipboard-copy>            </li>
          </ul>
</div>
</details>    </div>




    <div class="Box d-flex flex-column flex-shrink-0 mb-3">
      
  <div class="Box-header Details js-details-container">
      <div class="d-flex flex-items-center">
        <span class="flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1">
          <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/jefflovell/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jefflovell"><img class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/25373023?s=48&amp;v=4" width="24" height="24" alt="@jefflovell" /></a>
        </span>
        <div class="flex-1 d-flex flex-items-center ml-3 min-width-0">
          <div class="css-truncate css-truncate-overflow">
            <a class="text-bold Link--primary" rel="author" data-hovercard-type="user" data-hovercard-url="/users/jefflovell/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jefflovell">jefflovell</a>

              <span class="markdown-title">
                <a data-pjax="true" title="separated exercises into a new file" class="Link--secondary" href="/jefflovell/js109/commit/fb3d2ba5fa35ab3c412fef84c7c3c4417cca9e36">separated exercises into a new file</a>
              </span>
          </div>


          <span class="ml-2">
            <include-fragment accept="text/fragment+html" src="/jefflovell/js109/commit/fb3d2ba5fa35ab3c412fef84c7c3c4417cca9e36/rollup?direction=e" class="d-inline"></include-fragment>
          </span>
        </div>
        <div class="ml-3 d-flex flex-shrink-0 flex-items-center flex-justify-end color-fg-muted no-wrap">
          <span class="d-none d-md-inline">
            <span>Latest commit</span>
            <a class="text-small text-mono Link--secondary" href="/jefflovell/js109/commit/fb3d2ba5fa35ab3c412fef84c7c3c4417cca9e36" data-pjax>fb3d2ba</a>
            <span itemprop="dateModified"><relative-time datetime="2022-01-01T00:51:27Z" class="no-wrap">Jan 1, 2022</relative-time></span>
          </span>

          <a data-pjax href="/jefflovell/js109/commits/main/written-exam/exercises.md" class="ml-3 no-wrap Link--primary no-underline">
            <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-history">
    <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path>
</svg>
            <span class="d-none d-sm-inline">
              <strong>History</strong>
            </span>
          </a>
        </div>
      </div>

  </div>

  <div class="Box-body d-flex flex-items-center flex-auto border-bottom-0 flex-wrap" >
    <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default float-left mr-3" id="blob_contributors_box">
      <summary class="Link--primary">
        <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
</svg>
        <strong>1</strong>
        
        contributor
      </summary>
      <details-dialog
        class="Box Box--overlay d-flex flex-column anim-fade-in fast"
        aria-label="Users who have contributed to this file"
        src="/jefflovell/js109/contributors-list/main/written-exam/exercises.md" preload>
        <div class="Box-header">
          <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
          </button>
          <h3 class="Box-title">
            Users who have contributed to this file
          </h3>
        </div>
        <include-fragment>
          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="my-3 mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
        </include-fragment>
      </details-dialog>
    </details>
  </div>
    </div>


      







    <readme-toc>

    <div data-target="readme-toc.content" class="Box mt-3 position-relative">
      
  <div
    class="Box-header blob-header js-sticky js-position-sticky top-0 p-2 d-flex flex-shrink-0 flex-md-row flex-items-center"
    style="position: sticky; z-index: 1;"
  >

      <details
  data-target="readme-toc.trigger"
  data-menu-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;trigger&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}"
  data-menu-hydro-click-hmac="cbc07ac7344158afdad66924fa92bc86f536e7b6370ca9099d87cdb56f2feda8"
  class="dropdown details-reset details-overlay"
>
  <summary
    class="btn btn-octicon m-0 mr-2 p-2"
    aria-haspopup="true"
    aria-label="Table of Contents">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-list-unordered">
    <path fill-rule="evenodd" d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
  </summary>


  <details-menu class="SelectMenu" role="menu">
    <div class="SelectMenu-modal rounded-3 mt-1" style="max-height:340px;">

        <div class="SelectMenu-filter">
          <input
            class="SelectMenu-input form-control js-filterable-field"
            id="toc-filter-field"
            type="text"
            autocomplete="off"
            spellcheck="false"
            autofocus
            placeholder="Filter headings"
            aria-label="Filter headings">
        </div>

      <div class="SelectMenu-list SelectMenu-list--borderless p-2" style="overscroll-behavior: contain;" data-filterable-for="toc-filter-field" data-filterable-type="substring">
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#scope-example-1-variable-scope">Scope Example 1: Variable Scope</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#scope-example-2-variable-scope--first-class-functions">Scope Example 2: Variable Scope &amp; First Class Functions</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-1">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#scope-example-3-variable-shadowing--call-by-value">Scope Example 3: Variable Shadowing &amp; Call-By-Value</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-2">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#scope-example-4-variable-shadowing--typeerrors">Scope Example 4: Variable Shadowing &amp; TypeErrors</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-tbd">Answer: TBD</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#references-vs-values-example-1-pass-by-reference">References vs Values Example 1: Pass-By-Reference</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-3">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#references-vs-values-example-2-const--object-mutability">References vs Values Example 2: Const &amp; Object Mutability</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-4">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#references-vs-values-example-3-pass-by-reference-shallow-copies-implicit-return-side-effects">References vs Values Example 3: Pass-By-Reference, Shallow Copies, Implicit Return, Side Effects</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-5">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#iterators-example-1-arrayprototypemap--arrayprototypefilter">Iterators Example 1: array.prototype.map() &amp; array.prototype.filter()</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-6">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#iterators-example-2-arrayprototypemap">Iterators Example 2: array.prototype.map()</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-7">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#iterators-example-3-arrayprototypemap">Iterators Example 3: array.prototype.map()</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-tbd-1">Answer: TBD</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#iterators-example-4-arrayprototypefilter">Iterators Example 4: array.prototype.filter()</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-8">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#iterators-example-5-arrayprototypeforeach">Iterators Example 5: array.prototype.forEach()</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-9">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#objects-example-1-object-dot-notation-vs-bracket-notation">Objects Example 1: Object Dot Notation vs Bracket Notation</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-10">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#objects-example-2-bracket-notation--variables">Objects Example 2: Bracket Notation &amp; Variables</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#assignment-example-1-reassignment">Assignment Example 1: Reassignment</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-11">Answer:</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 24px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#loosestrict-equality-example-1-loose-equality">Loose/Strict Equality Example 1: Loose Equality</a>
          <a role="menuitem" class="filter-item SelectMenu-item py-1 " style="padding-left: 36px;" data-action="click:readme-toc#blur" data-targets="readme-toc.entries" data-hydro-click="{&quot;event_type&quot;:&quot;repository_toc_menu.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;entry&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="340c3ac976fae198c85c0af6882c0bad6c6cdcf679cba733531f2c6052e5cf4d" href="#answer-12">Answer:</a>
      </div>
    </div>
  </details-menu>
</details>


  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1">

      410 lines (266 sloc)
      <span class="file-info-divider"></span>
    21.9 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between hide-sm hide-md">
        <div class="BtnGroup">
    <a href="/jefflovell/js109/blob/main/written-exam/exercises.md?plain=1" data-permalink-href="/jefflovell/js109/blob/fb3d2ba5fa35ab3c412fef84c7c3c4417cca9e36/written-exam/exercises.md?plain=1" aria-label="Display the source blob" data-view-component="true" class="source tooltipped tooltipped tooltipped-n  js-permalink-replaceable-link btn-sm btn BtnGroup-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code mr-2">
    <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
</svg>
</a>    <a href="/jefflovell/js109/blob/main/written-exam/exercises.md" data-permalink-href="/jefflovell/js109/blob/fb3d2ba5fa35ab3c412fef84c7c3c4417cca9e36/written-exam/exercises.md" aria-label="Display the rendered blob" data-view-component="true" class="rendered tooltipped tooltipped tooltipped-n selected js-permalink-replaceable-link btn-sm btn BtnGroup-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file mr-2">
    <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
</svg>
</a>  </div>


    <div class="BtnGroup">
      <a href="/jefflovell/js109/raw/main/written-exam/exercises.md" id="raw-url" data-view-component="true" class="btn-sm btn BtnGroup-item">  Raw
</a>
        <a href="/jefflovell/js109/blame/main/written-exam/exercises.md" data-hotkey="b" data-view-component="true" class="js-update-url-with-hash btn-sm btn BtnGroup-item">  Blame
</a>
    </div>

    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="x-github-client://openRepo/https://github.com/jefflovell/js109?branch=main&amp;filepath=written-exam%2Fexercises.md"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-desktop">
    <path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path>
</svg>
          </a>

        <remote-clipboard-copy class="d-inline-block btn-octicon" style="height: 26px" data-src="/jefflovell/js109/raw/main/written-exam/exercises.md" data-action="click:remote-clipboard-copy#remoteCopy">
  


  <span data-target="remote-clipboard-copy.idle">            <span class="tooltipped tooltipped-nw cursor-pointer" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;COPY_RAW_CONTENTS_BUTTON&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="b1a48e42ef0bc0e1b28bfd3d98cc397a1ed36a8c8c29ad7023d67fef6f717996" aria-label="Copy raw contents">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
</span></span>
  <span data-target="remote-clipboard-copy.fetching" hidden="hidden">            <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
  <span data-target="remote-clipboard-copy.success" hidden="hidden">            <span class="tooltipped tooltipped-nw" aria-label="Copied!">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
            </span>
</span>
  <span data-target="remote-clipboard-copy.error" hidden="hidden">            <span class="tooltipped tooltipped-nw" aria-label="Something went wrong. Try again.">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert color-fg-attention">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
            </span>
</span>
</remote-clipboard-copy>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/jefflovell/js109/edit/main/written-exam/exercises.md" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="m6We8ciTGZoEgN0EMh+lMa3QYgWwYhpaT4BU8I4FzeUhro4uacqhxWYiY285Qu5xWID11SiyZHQ9Td3pjbwDqw==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pencil">
    <path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path>
</svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/jefflovell/js109/delete/main/written-exam/exercises.md" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="fG9wIiQXxmYdUNysB5UL3EIiCCf4MpEYTJr2BnW+caQstQKHqOYb+lHXu1mc4m3duEQ1CkRbYo9qce7tOLrvlg==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-trash">
    <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path>
</svg>
            </button>
</form>    </div>
  </div>

    <div class="d-flex hide-lg hide-xl flex-order-2 flex-grow-0">
      <details class="dropdown details-reset details-overlay d-inline-block">
        <summary class="btn-octicon p-2" aria-haspopup="true" aria-label="possible actions">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
        </summary>

        <ul class="dropdown-menu dropdown-menu-sw" style="width: 175px">
            <li>
                <a class="dropdown-item tooltipped tooltipped-nw js-remove-unless-platform"
                   data-platforms="windows,mac"
                   href="x-github-client://openRepo/https://github.com/jefflovell/js109?branch=main&amp;filepath=written-exam%2Fexercises.md"
                   data-ga-click="Repository, open with desktop">
                  Open with Desktop
                </a>
            </li>
          <li>
            <a class="dropdown-item" href="/jefflovell/js109/raw/main/written-exam/exercises.md">
              View raw
            </a>
          </li>
            <li>
              <remote-clipboard-copy class="dropdown-item" data-src="/jefflovell/js109/raw/main/written-exam/exercises.md" data-action="click:remote-clipboard-copy#remoteCopy">
  

  <span data-target="remote-clipboard-copy.idle">                  <span class="cursor-pointer" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;COPY_RAW_CONTENTS_BUTTON&quot;,&quot;repository_id&quot;:443447755,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="b1a48e42ef0bc0e1b28bfd3d98cc397a1ed36a8c8c29ad7023d67fef6f717996">
                    Copy raw contents
</span></span>
  <span data-target="remote-clipboard-copy.fetching" hidden="hidden">                  Copy raw contents
                  <span class="d-inline-block position-relative" style="top: 3px">
                    <svg aria-label="fetching contents…" style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
                  </span>
</span>
  <span data-target="remote-clipboard-copy.success" hidden="hidden">                  Copy raw contents
                  <svg aria-label="Copied!" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
</span>
  <span data-target="remote-clipboard-copy.error" hidden="hidden">                  Copy raw contents
                  <svg aria-label="Something went wrong. Try again." role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert color-fg-attention">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
</span>
</remote-clipboard-copy>            </li>
            <li>
              <a class="dropdown-item" href="/jefflovell/js109/blame/main/written-exam/exercises.md">
                View blame
              </a>
            </li>

              <li class="dropdown-divider" role="none"></li>
              <li>
                <a class="dropdown-item" href="/jefflovell/js109/edit/main/written-exam/exercises.md">Edit file</a>
              </li>
              <li>
                <a class="dropdown-item menu-item-danger" href="/jefflovell/js109/delete/main/written-exam/exercises.md">Delete file</a>
              </li>
        </ul>
      </details>
    </div>
</div>


        <div id="readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6 gist-border-0">
    <article class="markdown-body entry-content container-lg" itemprop="text"><h2 dir="auto"><a id="user-content-scope-example-1-variable-scope" class="anchor" aria-hidden="true" href="#scope-example-1-variable-scope"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Scope Example 1: Variable Scope</h2>
<p dir="auto">What does this code do and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);"><pre><span class="pl-k">let</span> <span class="pl-s1">b</span> <span class="pl-c1">=</span> <span class="pl-c1">2</span><span class="pl-kos">;</span>

<span class="pl-k">function</span> <span class="pl-en">test</span><span class="pl-kos">(</span><span class="pl-s1">a</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-s1">a</span> <span class="pl-c1">=</span> <span class="pl-s1">b</span><span class="pl-kos">;</span>
  <span class="pl-k">return</span> <span class="pl-s1">a</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-en">test</span><span class="pl-kos">(</span><span class="pl-c1">5</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">b</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">a</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer" class="anchor" aria-hidden="true" href="#answer"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">Line 8 will <strong>return</strong> the number <code>2</code>.</p>
<p dir="auto">Line 9 will <strong>print</strong> the number <code>2</code> to the console.</p>
<p dir="auto">Line 10 will throw a <code>referenceError: a is not defined</code>.</p>
<p dir="auto">The concept being demonstrated here is <strong>variable scope</strong>: in particular that inner (child) scopes <strong>do have access</strong> to outer (parent) scope variables but that outer (parent) scopes <strong>do not have access</strong> to inner (child) scope variables..  <code>b</code> is a global variable, and <code>a</code> is a parameter (local variable) of the function <code>test()</code>. So when <code>a</code> is reassigned the value of <code>b</code> on line 4, the function <code>test()</code> first looks for a local variable, then when it finds none, expands to the outer, global scope.  Since <code>b</code> is in the global scope, it can be used by both the function <code>test()</code> and the method <code>console.log()</code>.  However, when we attempt to access <code>a</code> on line 10 from a different function scope (<code>console.log()</code>), we are not able to see into the scope of the function <code>test()</code>, therefore a <code>referenceError</code> is thrown.</p>
<h2 dir="auto"><a id="user-content-scope-example-2-variable-scope--first-class-functions" class="anchor" aria-hidden="true" href="#scope-example-2-variable-scope--first-class-functions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Scope Example 2: Variable Scope &amp; First Class Functions</h2>
<p dir="auto">What does this code do and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let name = &quot;John&quot;;

const greet = () =&gt; `Hi ${name}`;

let greeting = greet();

console.log(greeting);"><pre><span class="pl-k">let</span> <span class="pl-s1">name</span> <span class="pl-c1">=</span> <span class="pl-s">"John"</span><span class="pl-kos">;</span>

<span class="pl-k">const</span> <span class="pl-en">greet</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-s">`Hi <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">name</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span>

<span class="pl-k">let</span> <span class="pl-s1">greeting</span> <span class="pl-c1">=</span> <span class="pl-en">greet</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">greeting</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-1" class="anchor" aria-hidden="true" href="#answer-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">Line 7 logs the value <code>Hi John</code>.</p>
<p dir="auto">The concepts being demonstrated here are <strong>variable scope</strong>, <strong>first class functions</strong>, and <strong>string interpolation</strong> via a <em>template literal</em>.</p>
<p dir="auto">We start by declaring a variable <code>name</code> and initializing it to the value <code>"John"</code>.  Next, the <code>const</code> greet is assigned an <strong>arrow function expression</strong> which takes no arguments and returns the string <code>"Hi ${name}"</code>.  This works because our arrow function body contains a <strong>single expression</strong>, which causes the <em>evaluation of that expression to become the <strong>return value</strong> of the function without requiring an <strong>explicit return statement</strong></em>. In that return statement <code>${name}</code> is a <strong>template literal</strong> which allows us to <strong>interpolate a string value from a variable</strong>.  We can access name because of <strong>variable scoping rules</strong>, in particular that inner (child) scopes have access to outer (parent) scope variables.  On line five, the invocation of <code>greet()</code> is assigned to the variable <code>greeting</code> which is possible because JavaScript functions are <strong>first class citizens</strong> which means they can be treated like any other value, including <strong>assignment to variables</strong>.  Therefore, when <code>greeting</code> is passed to <code>console.log()</code> on line 7, its value is an <strong>invocation</strong> of the arrow function, so the console prints the return value of the arrow function.
*/</p>
<h2 dir="auto"><a id="user-content-scope-example-3-variable-shadowing--call-by-value" class="anchor" aria-hidden="true" href="#scope-example-3-variable-shadowing--call-by-value"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Scope Example 3: Variable Shadowing &amp; Call-By-Value</h2>
<p dir="auto">What does this code do and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let dog = 'Bark';

function dogCall(dog) {
  dog = dog + dog;
}

dogCall(dog);
console.log(dog);"><pre><span class="pl-k">let</span> <span class="pl-s1">dog</span> <span class="pl-c1">=</span> <span class="pl-s">'Bark'</span><span class="pl-kos">;</span>

<span class="pl-k">function</span> <span class="pl-en">dogCall</span><span class="pl-kos">(</span><span class="pl-s1">dog</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-s1">dog</span> <span class="pl-c1">=</span> <span class="pl-s1">dog</span> <span class="pl-c1">+</span> <span class="pl-s1">dog</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-en">dogCall</span><span class="pl-kos">(</span><span class="pl-s1">dog</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">dog</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-2" class="anchor" aria-hidden="true" href="#answer-2"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">line 7 returns <code>undefined</code>.</p>
<p dir="auto">line 8 logs <code>'Bark'</code>.</p>
<p dir="auto">There are two primary concepts demonstrated here:</p>
<p dir="auto">The first concept demonstrated is <strong>Call-By-Value</strong> or <strong>Variables-as-Values</strong>: All <strong>primitive</strong> data types in JavaScript (<code>string</code>, <code>number</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>bigInt</code>(ES2015), <code>symbol</code>(ES2015)) are <strong>atomic</strong> or <em>indivisible</em> values and are therefore <strong>immutable</strong> (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is <em>the value itself</em> (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.</p>
<p dir="auto">The second concept demonstrated is <strong>variable scope</strong>: in particular <strong>variable shadowing</strong>, wherein a <em>local</em> (child scope) variable's name shadows a <em>global</em> (parent scope) variable of the <strong>same name</strong> thereby making the global variable <em>inaccessible</em> within the local scope.</p>
<p dir="auto">On line 1, <code>dog</code> is a global variable and assigned the value <code>'Bark'</code>.  When it is passed into the function <code>dogCall()</code> via the <strong>parameter</strong> <code>dog</code>, because strings are <strong>primitive</strong>, it is passed in by value and a 'copy' of the value is assigned to the function's local variable <code>dog</code> which is wholly independent of the value held by the global <code>dog</code>.  The function <code>dogCall()</code> doesn't actually cause any side-effects because of <strong>variable shadowing</strong>.  Since the parameter <code>dog</code> has the same name as the global variable but its value is primitive, the function can never access the value of the global variable <code>dog</code>.  The concatenation performed is simply updating the parameter's value.  When the function exits, its local variable and the concatenation reassignment that it performed are unloaded from memory. So the function simply exits and returns <code>undefined</code>.  Thus when <code>dog</code> is logged, it logs the global variable's value of <code>"Bark"</code>. The value of global <code>dog</code> was never updated by <code>dogCall()</code> because of the shadowing.</p>
<h2 dir="auto"><a id="user-content-scope-example-4-variable-shadowing--typeerrors" class="anchor" aria-hidden="true" href="#scope-example-4-variable-shadowing--typeerrors"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Scope Example 4: Variable Shadowing &amp; TypeErrors</h2>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const greeting = &quot;Hello!&quot;;
function change(greeting) {
  greeting = &quot;Hi!&quot;;
  return greeting;
}

console.log(change());
console.log(greeting);"><pre><span class="pl-k">const</span> <span class="pl-s1">greeting</span> <span class="pl-c1">=</span> <span class="pl-s">"Hello!"</span><span class="pl-kos">;</span>
<span class="pl-k">function</span> <span class="pl-en">change</span><span class="pl-kos">(</span><span class="pl-s1">greeting</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-s1">greeting</span> <span class="pl-c1">=</span> <span class="pl-s">"Hi!"</span><span class="pl-kos">;</span>
  <span class="pl-k">return</span> <span class="pl-s1">greeting</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-en">change</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">greeting</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-tbd" class="anchor" aria-hidden="true" href="#answer-tbd"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer: TBD</h3>
<h2 dir="auto"><a id="user-content-references-vs-values-example-1-pass-by-reference" class="anchor" aria-hidden="true" href="#references-vs-values-example-1-pass-by-reference"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>References vs Values Example 1: Pass-By-Reference</h2>
<p dir="auto">What does this code do and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);"><pre><span class="pl-k">let</span> <span class="pl-s1">foo</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span>
  <span class="pl-c1">a</span>: <span class="pl-s">'hello'</span><span class="pl-kos">,</span>
  <span class="pl-c1">b</span>: <span class="pl-s">'world'</span><span class="pl-kos">,</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>

<span class="pl-k">let</span> <span class="pl-s1">qux</span> <span class="pl-c1">=</span> <span class="pl-s">'hello'</span><span class="pl-kos">;</span>

<span class="pl-k">function</span> <span class="pl-en">bar</span><span class="pl-kos">(</span><span class="pl-s1">argument1</span><span class="pl-kos">,</span> <span class="pl-s1">argument2</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-s1">argument1</span><span class="pl-kos">.</span><span class="pl-c1">a</span> <span class="pl-c1">=</span> <span class="pl-s">'hi'</span><span class="pl-kos">;</span>
  <span class="pl-s1">argument2</span> <span class="pl-c1">=</span> <span class="pl-s">'hi'</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-en">bar</span><span class="pl-kos">(</span><span class="pl-s1">foo</span><span class="pl-kos">,</span> <span class="pl-s1">qux</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">foo</span><span class="pl-kos">.</span><span class="pl-c1">a</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">qux</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-3" class="anchor" aria-hidden="true" href="#answer-3"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">line 79 prints <code>'hi'</code>.</p>
<p dir="auto">line 80 prints <code>'hello'</code>.</p>
<p dir="auto">The concept being demonstrated here is <strong>Pass-by-Reference</strong>: When objects are passed to a function (including arrays), what the function receives as an argument is a <strong>reference</strong> to the object's location in memory, which in turn points to the object's property values in memory.  The orginal value and the passed value are therefore references to the <strong>same object</strong> and therefore the object's values can be mutated by mutating the argument.</p>
<p dir="auto">When the function <code>bar</code> is declared on line 72, it takes two parameters, both of which are re-assigned to new values inside the body of the function.
We invoke the function <code>bar</code> on line 77 passing in the value of <code>foo</code>, an object, to <code>argument1</code>.  When <code>foo.a</code> is reassigned on line 73, because <code>foo</code> is an object, that value has been <strong>passed by reference</strong> meaning that the memory location of <code>foo.a</code> is what is passed, not the value <code>'hello'</code> itself.</p>
<p dir="auto">However, the value of <code>qux</code>, which is passed into <code>argument2</code> is a string which is a <code>primitive</code> and is therefore <strong>passed by value</strong> i.e. a 'copy' of <code>'hello'</code> is passed to the function <code>bar</code> which is completely independent from the value held by <code>qux</code>.</p>
<p dir="auto">This is why when logging <code>foo.a</code> the we find that <code>foo</code> has been mutated, with <code>foo.a</code>'s value being reassigned to <code>'hi</code>' but when logging <code>qux</code> the value is unchanged.</p>
<h2 dir="auto"><a id="user-content-references-vs-values-example-2-const--object-mutability" class="anchor" aria-hidden="true" href="#references-vs-values-example-2-const--object-mutability"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>References vs Values Example 2: Const &amp; Object Mutability</h2>
<p dir="auto">What does this code do and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const campus = { state: 'Boston', address: 'North Ave NW' };
campus.state = 'Georgia';
console.log(campus);

const location = Object.freeze({ state: 'CA', country: 'US' });
location.state = 'FL';
console.log(location);"><pre><span class="pl-k">const</span> <span class="pl-s1">campus</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span> <span class="pl-c1">state</span>: <span class="pl-s">'Boston'</span><span class="pl-kos">,</span> <span class="pl-c1">address</span>: <span class="pl-s">'North Ave NW'</span> <span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-s1">campus</span><span class="pl-kos">.</span><span class="pl-c1">state</span> <span class="pl-c1">=</span> <span class="pl-s">'Georgia'</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">campus</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

<span class="pl-k">const</span> <span class="pl-s1">location</span> <span class="pl-c1">=</span> <span class="pl-v">Object</span><span class="pl-kos">.</span><span class="pl-en">freeze</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">state</span>: <span class="pl-s">'CA'</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">'US'</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-s1">location</span><span class="pl-kos">.</span><span class="pl-c1">state</span> <span class="pl-c1">=</span> <span class="pl-s">'FL'</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">location</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-4" class="anchor" aria-hidden="true" href="#answer-4"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">Line 3 prints an object <code>{ state: 'Georgia', address: 'North Ave NW' }</code>.</p>
<p dir="auto">Line 7 throws a <code>TypeError</code>.</p>
<p dir="auto">The principle demonstrated here is the mutability of objects (variables as pointers):  even when declared with <code>const</code>, objects can be mutated and properties reassigned unless <code>Object.freeze()</code> is used to freeze the object so that its properties cannot be changed. Variables which are assigned objects <strong>do not</strong> store a value, but instead store <strong>pointers</strong> to the object and its properties in memory.  While a constant ("variable") declared with <code>const</code> cannot be reassigned to point to another address in memory (this is an intrinsic property of <code>const</code> regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties can change. This is why it is possible to add, remove, or reassign property names and values of objects declared with <code>const</code> but not possible to change the object that <code>const</code> points to.</p>
<p dir="auto">Because the values being assigned to <code>campus</code> and <code>location</code> are both objects, they can still be read and written even though we are using <code>const</code> since what's being stored are references to the objects in memory, not the values themselves.  This is why on line 6, <code>campus.state</code> can be reassigned from <code>'Boston'</code> to <code>'Georgia'</code>. However when we pass the object on line 1 to the <code>Object</code> <strong>static method</strong> <code>freeze()</code>, we prevent JavaScript from being able to reassign any properties in that object even though it is a pointer, thus throwing a ```TypeError``.</p>
<h2 dir="auto"><a id="user-content-references-vs-values-example-3-pass-by-reference-shallow-copies-implicit-return-side-effects" class="anchor" aria-hidden="true" href="#references-vs-values-example-3-pass-by-reference-shallow-copies-implicit-return-side-effects"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>References vs Values Example 3: Pass-By-Reference, Shallow Copies, Implicit Return, Side Effects</h2>
<p dir="auto">What does the following code do and why?  (complex++ problem)</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const hottestTemps = [
  {continent : &quot;Africa&quot;, country: &quot;Tunisia&quot;, temp: 55},
  {continent : &quot;Asia&quot;, country: &quot;Iran&quot;, temp : 54},
  {continent : &quot;North America&quot;, country: &quot;USA&quot;, temp : 56.7},
  {continent : &quot;South America&quot;, country: &quot;Argentina&quot;, temp: 48.9},
  {continent : &quot;Europe&quot;, country: &quot;Greece&quot;, temp : 49},
  {continent : &quot;Oceania&quot;, country: &quot;Australia&quot;, temp : 50.7}
];

function toFahrenheit(tempsArr) {
  let newTempsArr = tempsArr.slice();
  newTempsArr.forEach(obj =&gt; {
    obj.temp = (obj.temp * 9 / 5) + 32;
  });
}

const hottestTempsInF = toFahrenheit(hottestTemps);
console.log(hottestTempsInF);
console.log(hottestTemps);"><pre><span class="pl-k">const</span> <span class="pl-s1">hottestTemps</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span>
  <span class="pl-kos">{</span><span class="pl-c1">continent</span> : <span class="pl-s">"Africa"</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">"Tunisia"</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">55</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span><span class="pl-c1">continent</span> : <span class="pl-s">"Asia"</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">"Iran"</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span> : <span class="pl-c1">54</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span><span class="pl-c1">continent</span> : <span class="pl-s">"North America"</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">"USA"</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span> : <span class="pl-c1">56.7</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span><span class="pl-c1">continent</span> : <span class="pl-s">"South America"</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">"Argentina"</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">48.9</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span><span class="pl-c1">continent</span> : <span class="pl-s">"Europe"</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">"Greece"</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span> : <span class="pl-c1">49</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span><span class="pl-c1">continent</span> : <span class="pl-s">"Oceania"</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">"Australia"</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span> : <span class="pl-c1">50.7</span><span class="pl-kos">}</span>
<span class="pl-kos">]</span><span class="pl-kos">;</span>

<span class="pl-k">function</span> <span class="pl-en">toFahrenheit</span><span class="pl-kos">(</span><span class="pl-s1">tempsArr</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">let</span> <span class="pl-s1">newTempsArr</span> <span class="pl-c1">=</span> <span class="pl-s1">tempsArr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-s1">newTempsArr</span><span class="pl-kos">.</span><span class="pl-en">forEach</span><span class="pl-kos">(</span><span class="pl-s1">obj</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
    <span class="pl-s1">obj</span><span class="pl-kos">.</span><span class="pl-c1">temp</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-s1">obj</span><span class="pl-kos">.</span><span class="pl-c1">temp</span> <span class="pl-c1">*</span> <span class="pl-c1">9</span> <span class="pl-c1">/</span> <span class="pl-c1">5</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-c1">32</span><span class="pl-kos">;</span>
  <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-k">const</span> <span class="pl-s1">hottestTempsInF</span> <span class="pl-c1">=</span> <span class="pl-en">toFahrenheit</span><span class="pl-kos">(</span><span class="pl-s1">hottestTemps</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">hottestTempsInF</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">hottestTemps</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-5" class="anchor" aria-hidden="true" href="#answer-5"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">The program returns undefined followed by printing the array of objects <code>hottestTemps</code>:</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="undefined

[
  { continent: 'Africa', country: 'Tunisia', temp: 131 },
  { continent: 'Asia', country: 'Iran', temp: 129.2 },
  { continent: 'North America', country: 'USA', temp: 134.06 },
  { continent: 'South America', country: 'Argentina', temp: 120.02 },
  { continent: 'Europe', country: 'Greece', temp: 120.2 },
  { continent: 'Oceania', country: 'Australia', temp: 123.26 }
]"><pre><span class="pl-c1">undefined</span>

<span class="pl-kos">[</span>
  <span class="pl-kos">{</span> <span class="pl-c1">continent</span>: <span class="pl-s">'Africa'</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">'Tunisia'</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">131</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span> <span class="pl-c1">continent</span>: <span class="pl-s">'Asia'</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">'Iran'</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">129.2</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span> <span class="pl-c1">continent</span>: <span class="pl-s">'North America'</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">'USA'</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">134.06</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span> <span class="pl-c1">continent</span>: <span class="pl-s">'South America'</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">'Argentina'</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">120.02</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span> <span class="pl-c1">continent</span>: <span class="pl-s">'Europe'</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">'Greece'</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">120.2</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">{</span> <span class="pl-c1">continent</span>: <span class="pl-s">'Oceania'</span><span class="pl-kos">,</span> <span class="pl-c1">country</span>: <span class="pl-s">'Australia'</span><span class="pl-kos">,</span> <span class="pl-c1">temp</span>: <span class="pl-c1">123.26</span> <span class="pl-kos">}</span>
<span class="pl-kos">]</span></pre></div>
<p dir="auto">The first concept being demonstrated here is <strong>implicit return values</strong>: Functions always return <em>something</em>. If a function does not return a value explicitly, it will always return <code>undefined</code>.  Other operations performed <em>inside</em> of a function that have an effect <em>outside</em> the function without being returned are known as <strong>side-effects</strong> and have no impact on the return value.</p>
<p dir="auto">The second concept being demonstrated here is <strong>variables as pointers</strong>: All objects (including arrays) are assigned to variables <strong><em>not</em> as values</strong> at the variable's memory address but as <strong>references</strong> (pointers) to other memory addresses which contain the values of the object.</p>
<p dir="auto">On line 130 when <code>hottestTempsInF</code> is assigned the expression <code>toFahrenheit(hottestTemps)</code>, it would be natural to expect the value of <code>hottestTempsInF</code> to be a copy of the array passed to <code>toFahrenheit()</code> with the temps updated to Fahrenheit.  However, the function <code>toFahrenheit()</code> as declared on line 123 does not contain a <strong>return</strong> statement, so the return value of function expression assigned to the <code>const</code> <code>hottestTempsInF</code> is actually <code>undefined</code>.  Additionally, our input array is an array of <strong>objects</strong>. When we invoke <code>slice()</code> on line 123 of the function <code>toFarenheit()</code> to make a copy of the input array, we do create a new array, but that array is a <strong>shallow copy</strong>.  The objects referenced <em>inside the input array's elements are still shared with the original array</em>.  Therefore on line 130/131 when we would expect to print two different arrays because we assigned the expression <code>toFarhrenheit(hottestTemps)</code> to a new variable, what we find instead is that we have printed <code>undefined</code> and mutated the input array.</p>
<h2 dir="auto"><a id="user-content-iterators-example-1-arrayprototypemap--arrayprototypefilter" class="anchor" aria-hidden="true" href="#iterators-example-1-arrayprototypemap--arrayprototypefilter"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Iterators Example 1: array.prototype.map() &amp; array.prototype.filter()</h2>
<p dir="auto">Describe the difference between the array <code>map</code> and the <code>filter</code> method. When would you use each?</p>
<h3 dir="auto"><a id="user-content-answer-6" class="anchor" aria-hidden="true" href="#answer-6"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">Both <code>map()</code> and <code>filter()</code> are called directly on array and execute a callbackFn for each element in the calling array.  Both methods return a <strong>new</strong> array (neither method mutates the caller).  Essentially, <code>filter()</code> is an array selection method and <code>map()</code> is an array transformation method.</p>
<p dir="auto">The callbackFn of <code>map()</code> performas a transformation on each element passed to it and passes it back to <code>map()</code>.  Once every element has been iterated over, <code>map()</code> returns the <strong>new array</strong> to the caller, populated with the transformed values for each element of the calling array.  The return array is always equal in length to the calling array.  This also applies to sparse arrays.</p>
<p dir="auto">The callbackFn of <code>filter()</code> evaluates each element's value against a test condition to determine which elements to select.  For each element, if the test evaluates to true, the callbackFn returns the current value to <code>filter()</code> to be included as part of the <strong>new array</strong> returned to the caller. If no elements of the calling array pass the test, <code>filter</code> returns an empty array.</p>
<h2 dir="auto"><a id="user-content-iterators-example-2-arrayprototypemap" class="anchor" aria-hidden="true" href="#iterators-example-2-arrayprototypemap"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Iterators Example 2: array.prototype.map()</h2>
<p dir="auto">What does the following code do and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="[1, 2, 3].map(num =&gt; {
  num * num;
});"><pre><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-en">map</span><span class="pl-kos">(</span><span class="pl-s1">num</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
  <span class="pl-s1">num</span> <span class="pl-c1">*</span> <span class="pl-s1">num</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-7" class="anchor" aria-hidden="true" href="#answer-7"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">Line 312 returns <code>[undefined, undefined, undefined]</code></p>
<p dir="auto">The concepts being demonstrated here are arrow syntax and implicit return values.</p>
<p dir="auto">The callbackFn of <code>map()</code> performs a transformation on each element passed to it and passes it back to <code>map()</code>.  Once every element has been iterated over, <code>map()</code> returns the <strong>new array</strong> to the caller, populated with the transformed values for each element of the calling array.  The return array is always equal in length to the calling array.</p>
<p dir="auto">Because the <code>callbackFn</code> for <code>map()</code> is using arrow syntax with <code>{ }</code> you must include an <strong>explicit return statement</strong>.  Since the return statement was not included, <code>map()</code> instead returns the <strong>implicit return value</strong> of <code>undefined</code>.</p>
<h2 dir="auto"><a id="user-content-iterators-example-3-arrayprototypemap" class="anchor" aria-hidden="true" href="#iterators-example-3-arrayprototypemap"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Iterators Example 3: array.prototype.map()</h2>
<p dir="auto">What does this log and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let words = [[&quot;hunter&quot;, &quot;spear&quot;], [&quot;gatherer&quot;, &quot;sack&quot;]];

function pluralize(array) {
  return array.map(words =&gt; {
    words[0] += &quot;s&quot;;
    words[1] += &quot;s&quot;;
    return words;
  });
}

console.log(pluralize(words));
console.log(words);"><pre><span class="pl-k">let</span> <span class="pl-s1">words</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">[</span><span class="pl-s">"hunter"</span><span class="pl-kos">,</span> <span class="pl-s">"spear"</span><span class="pl-kos">]</span><span class="pl-kos">,</span> <span class="pl-kos">[</span><span class="pl-s">"gatherer"</span><span class="pl-kos">,</span> <span class="pl-s">"sack"</span><span class="pl-kos">]</span><span class="pl-kos">]</span><span class="pl-kos">;</span>

<span class="pl-k">function</span> <span class="pl-en">pluralize</span><span class="pl-kos">(</span><span class="pl-s1">array</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">return</span> <span class="pl-s1">array</span><span class="pl-kos">.</span><span class="pl-en">map</span><span class="pl-kos">(</span><span class="pl-s1">words</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
    <span class="pl-s1">words</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span> <span class="pl-c1">+=</span> <span class="pl-s">"s"</span><span class="pl-kos">;</span>
    <span class="pl-s1">words</span><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">]</span> <span class="pl-c1">+=</span> <span class="pl-s">"s"</span><span class="pl-kos">;</span>
    <span class="pl-k">return</span> <span class="pl-s1">words</span><span class="pl-kos">;</span>
  <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-en">pluralize</span><span class="pl-kos">(</span><span class="pl-s1">words</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">words</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-tbd-1" class="anchor" aria-hidden="true" href="#answer-tbd-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer: TBD</h3>
<h2 dir="auto"><a id="user-content-iterators-example-4-arrayprototypefilter" class="anchor" aria-hidden="true" href="#iterators-example-4-arrayprototypefilter"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Iterators Example 4: array.prototype.filter()</h2>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="[1, 2, 3].filter(num =&gt; 'hi');"><pre><span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-en">filter</span><span class="pl-kos">(</span><span class="pl-s1">num</span> <span class="pl-c1">=&gt;</span> <span class="pl-s">'hi'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-8" class="anchor" aria-hidden="true" href="#answer-8"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">Line 329 returns a new array <code>[1, 2, 3]</code></p>
<p dir="auto">The concept being demonstrated here is <strong>implicit type coercion</strong></p>
<p dir="auto"><code>array.prototype.filter()</code> is an array method for selection which is called directly on array and executes a callbackFn for each element in the calling array. The callbackFn of <code>filter()</code> evaluates a test condition (the return statement) to determine selection.  For each element, if the test evaluates to true (callbackFn returns <code>true</code>), <code>filter()</code> adds the current element to a <strong>new array</strong> to be returned to the caller. If no elements of the calling array pass the test, <code>filter</code> returns an empty array. <strong>This method does not mutate the caller.</strong></p>
<p dir="auto">In order to assess which values to select, the return statement of the callbackFn (string <code>'hi'</code>) is coerced to a <code>Boolean</code>. All non-empty strings are <code>truthy</code> (coerce to <code>true</code>) so the return value of the callbackFn is <code>true</code>.  Since the test is <strong>always</strong> true regardless of argument passed to callbackFn, on each invocation of the callbackFn the element is added to the returned array.</p>
<h2 dir="auto"><a id="user-content-iterators-example-5-arrayprototypeforeach" class="anchor" aria-hidden="true" href="#iterators-example-5-arrayprototypeforeach"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Iterators Example 5: array.prototype.forEach()</h2>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let numbers = [3, 9, 8, 2, 4, 6, 7, 5, 1];

function onlyOdds(nums) {
  nums.forEach( (num, idx) =&gt; {
    if ( num % 2 !== 0) {
      nums.splice(idx, 1);
    }
  })
  return nums;
}

onlyOdds(numbers);
// return =&gt; [ 9, 8, 2, 4, 6, 5 ]"><pre><span class="pl-k">let</span> <span class="pl-s1">numbers</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">,</span> <span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-c1">2</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">6</span><span class="pl-kos">,</span> <span class="pl-c1">7</span><span class="pl-kos">,</span> <span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">]</span><span class="pl-kos">;</span>

<span class="pl-k">function</span> <span class="pl-en">onlyOdds</span><span class="pl-kos">(</span><span class="pl-s1">nums</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-s1">nums</span><span class="pl-kos">.</span><span class="pl-en">forEach</span><span class="pl-kos">(</span> <span class="pl-kos">(</span><span class="pl-s1">num</span><span class="pl-kos">,</span> <span class="pl-s1">idx</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
    <span class="pl-k">if</span> <span class="pl-kos">(</span> <span class="pl-s1">num</span> <span class="pl-c1">%</span> <span class="pl-c1">2</span> <span class="pl-c1">!==</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
      <span class="pl-s1">nums</span><span class="pl-kos">.</span><span class="pl-en">splice</span><span class="pl-kos">(</span><span class="pl-s1">idx</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span><span class="pl-kos">)</span>
  <span class="pl-k">return</span> <span class="pl-s1">nums</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-en">onlyOdds</span><span class="pl-kos">(</span><span class="pl-s1">numbers</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// return =&gt; [ 9, 8, 2, 4, 6, 5 ]</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-9" class="anchor" aria-hidden="true" href="#answer-9"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">This code returns [ 9, 8, 2, 4, 6, 5 ]</p>
<p dir="auto">The concepts being demonstrated here are <em>iteration</em> and <em>concurrent mutation</em></p>
<p dir="auto"><code>array.prototype.forEach()</code>: is an array iteration method which is called directly on an array and executes a callbackFn, passing each element in the calling array to the callbackFn as an argument. <code>forEach()</code> is functionally equivalent to a <code>for</code> or <code>while</code> loop but requires no start or end conditions.  <code>forEach()</code> can only cause side effects as it cannot pass an explicit return value and will always return <code>undefined</code>.  <strong>This method does not mutate the caller, however it <em><strong>is possible</strong></em> for the callbackFn to mutate the caller as shown.</strong></p>
<p dir="auto">When iterating through an array or object, destructive methods like <code>splice()</code> can produce unexpected results when they mutate the caller while iterating.  In this example, we are passing the optional argument for the elements index on each call to callbackFn and using that index to delete an element from the calling array.  Because we are changing the length of the array while iterating, as <code>forEach()</code> increments the loop, the values are being shifted across different index positions, causing unexepected selections to occur.</p>
<h2 dir="auto"><a id="user-content-objects-example-1-object-dot-notation-vs-bracket-notation" class="anchor" aria-hidden="true" href="#objects-example-1-object-dot-notation-vs-bracket-notation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Objects Example 1: Object Dot Notation vs Bracket Notation</h2>
<p dir="auto">What do these two snippets log and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?"><pre><span class="pl-c">// Snippet 1</span>
<span class="pl-k">let</span> <span class="pl-s1">ocean</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">let</span> <span class="pl-s1">prefix</span> <span class="pl-c1">=</span> <span class="pl-s">'Indian'</span><span class="pl-kos">;</span>

<span class="pl-s1">ocean</span><span class="pl-kos">.</span><span class="pl-c1">prefix</span> <span class="pl-c1">=</span> <span class="pl-s">'Pacific'</span><span class="pl-kos">;</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">ocean</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// ?</span>

<span class="pl-c">// Snippet 2</span>
<span class="pl-k">let</span> <span class="pl-s1">ocean</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">let</span> <span class="pl-s1">prefix</span> <span class="pl-c1">=</span> <span class="pl-s">'Indian'</span><span class="pl-kos">;</span>

<span class="pl-s1">ocean</span><span class="pl-kos">[</span><span class="pl-s1">prefix</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s">'Pacific'</span><span class="pl-kos">;</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">ocean</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// ?</span></pre></div>
<h2 dir="auto"><a id="user-content-answer-10" class="anchor" aria-hidden="true" href="#answer-10"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h2>
<p dir="auto">snippet 1 prints:  { prefix: ‘Pacific’ }
snippet 2 prints:  { Indian: ‘Pacific’ }</p>
<p dir="auto">The concept being demonstrated here is <strong>assignment</strong> via <strong>object dot notation</strong> vs <strong>object bracket notation</strong></p>
<p dir="auto">When an object property is accessed via dot notation, the property being accessed or assigned is a property with a key named the literal value written after the dot.  In this case a property of the object <code>ocean</code> with a property key name of <code>prefix</code>. What is assigned to that key name on line 4 is the value <code>'Pacific'</code> resulting in a key-value pair of <code>prefix = "Pacific"</code>.</p>
<p dir="auto">In snippet 2, we are instead using bracket notation, which less us pass the value of a variable into the object thus changing the assignment of the key name from <code>prefix</code> to the value assigned to prefix which is <code>'Indian'</code>.  So on line 4 when we assign <code>ocean[prefix] = 'Pacific'</code> we end up with a key value pair of <code>Indian: 'Pacific'</code></p>
<h2 dir="auto"><a id="user-content-objects-example-2-bracket-notation--variables" class="anchor" aria-hidden="true" href="#objects-example-2-bracket-notation--variables"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Objects Example 2: Bracket Notation &amp; Variables</h2>
<p dir="auto">What does this code return and why?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let person = {              // line 1
  name: 'Jane',
  age: 24                   // line 3
}                           // line 4

function changeName(name) { // line 6
  person[name] = name;
  console.log(person);      // line 8
  return person;
}                           // line 10

changeName('Jessie');       // line 12"><pre><span class="pl-k">let</span> <span class="pl-s1">person</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span>              <span class="pl-c">// line 1</span>
  <span class="pl-c1">name</span>: <span class="pl-s">'Jane'</span><span class="pl-kos">,</span>
  <span class="pl-c1">age</span>: <span class="pl-c1">24</span>                   <span class="pl-c">// line 3</span>
<span class="pl-kos">}</span>                           <span class="pl-c">// line 4</span>

<span class="pl-k">function</span> <span class="pl-en">changeName</span><span class="pl-kos">(</span><span class="pl-s1">name</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// line 6</span>
  <span class="pl-s1">person</span><span class="pl-kos">[</span><span class="pl-s1">name</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">name</span><span class="pl-kos">;</span>
  <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">person</span><span class="pl-kos">)</span><span class="pl-kos">;</span>      <span class="pl-c">// line 8</span>
  <span class="pl-k">return</span> <span class="pl-s1">person</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>                           <span class="pl-c">// line 10</span>

<span class="pl-en">changeName</span><span class="pl-kos">(</span><span class="pl-s">'Jessie'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>       <span class="pl-c">// line 12</span></pre></div>
<p dir="auto">Line 12 returns: { name: 'Jane', age: 24, Jessie: 'Jessie' }</p>
<p dir="auto">The concept being demonstrated here is object bracket notation syntax, specifically handling key names assigned to variables.</p>
<p dir="auto">Object <code>properties</code> are key-value pairs where the <code>keys</code> are strings and the <code>values</code> can be any type of data.  There are two ways to access or assign values to object properties:  <code>Dot notation</code> and <code>bracket notation</code>.</p>
<p dir="auto">On line 7 when we re-assign <code>person[name]</code> to the argument passed to the function <code>changeName()</code>'s parameter <code>name</code> what we're actually doing is declaring a new property of the object <code>person</code> with a key-name of the <strong>VALUE</strong> assigned to the parameter <code>name</code>.  If the line was written with name in quotes: <code>'name'</code>, it would work as expected, accessing the <code>name</code> property of the <code>person</code> object. But because the quotes have been omitted we're instead accessing the value of the name parameter of <code>changeName()</code>. Literally, that reassignment expression could rewritten as:  <code>person.Jessie = 'Jessie'</code> because the argument passed to <code>changeName()</code> on line twelve is being used for <strong>both</strong> the key name and the key value.</p>
<h2 dir="auto"><a id="user-content-assignment-example-1-reassignment" class="anchor" aria-hidden="true" href="#assignment-example-1-reassignment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Assignment Example 1: Reassignment</h2>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="
let pets = ['dragon', 'turtle'];

let newPets = pets;

pets = [];

console.log(newPets);"><pre><span class="pl-k">let</span> <span class="pl-s1">pets</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-s">'dragon'</span><span class="pl-kos">,</span> <span class="pl-s">'turtle'</span><span class="pl-kos">]</span><span class="pl-kos">;</span>

<span class="pl-k">let</span> <span class="pl-s1">newPets</span> <span class="pl-c1">=</span> <span class="pl-s1">pets</span><span class="pl-kos">;</span>

<span class="pl-s1">pets</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">newPets</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-11" class="anchor" aria-hidden="true" href="#answer-11"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">the code logs [ 'dragon', 'turtle' ] to the console</p>
<p dir="auto">the concepts being shown here <strong>variable reassignment</strong> and <strong>printing</strong>.
This is possible because both <code>pets</code> and <code>newPets</code> are declared with the keyword <code>let</code> so their values are re-assignable.</p>
<ul dir="auto">
<li>on 1 one we declare a variable <code>pets</code> with the keyword <code>let</code> and assign it an array.</li>
<li>on line 3, we assign the current value of <code>pets</code> to a new variable <code>newPets</code> also declared with <code>let</code>.</li>
<li>on line 5, we reassign pets to an empty array.  This does not destroy the orginal array assigned to <code>pets</code>, it simply changes the array that <code>pets</code> references.</li>
<li>on line 7, we invoke the <code>console.log()</code> method which prints the value of <code>newPets</code> to the console.</li>
</ul>
<h2 dir="auto"><a id="user-content-loosestrict-equality-example-1-loose-equality" class="anchor" aria-hidden="true" href="#loosestrict-equality-example-1-loose-equality"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Loose/Strict Equality Example 1: Loose Equality</h2>
<p dir="auto">What does the following code log?</p>
<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let something = []; // line 1
let somethingElse = ''; // line 2

if (something === somethingElse) { // line 4
  console.log(&quot;TV&quot;);               // line 5
} else if (something == somethingElse) { // line 6
  console.log(&quot;Radio&quot;);                   // line 7
} else { // line 8
  console.log(&quot;Other&quot;); // line 9
} // line 10"><pre><span class="pl-k">let</span> <span class="pl-s1">something</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span> <span class="pl-c">// line 1</span>
<span class="pl-k">let</span> <span class="pl-s1">somethingElse</span> <span class="pl-c1">=</span> <span class="pl-s">''</span><span class="pl-kos">;</span> <span class="pl-c">// line 2</span>

<span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">something</span> <span class="pl-c1">===</span> <span class="pl-s1">somethingElse</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// line 4</span>
  <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">"TV"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>               <span class="pl-c">// line 5</span>
<span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">something</span> <span class="pl-c1">==</span> <span class="pl-s1">somethingElse</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// line 6</span>
  <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">"Radio"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>                   <span class="pl-c">// line 7</span>
<span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span> <span class="pl-c">// line 8</span>
  <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">"Other"</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// line 9</span>
<span class="pl-kos">}</span> <span class="pl-c">// line 10</span></pre></div>
<h3 dir="auto"><a id="user-content-answer-12" class="anchor" aria-hidden="true" href="#answer-12"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answer:</h3>
<p dir="auto">Line 10 prints: 'Radio'</p>
<p dir="auto">The concept being shown is <code>loose equality</code> vs <code>strict equality</code>.  Line 10 prints 'Radio' because of <code>loose equality</code>.</p>
<p dir="auto">The snippet contains two variables, one an empty <code>array</code> and the other an empty <code>string</code>. These two values are being compared in a series of conditionals using an <code>if...else if...else</code> statement. In the first condition, if the two values are <code>strictly equal</code> the code should print 'TV'.  Strict equality requires both the <code>value</code> and <code>data type</code> to be the same.  And because 1 value is an <code>array</code>, which means it is stored by reference,  that actually goes a step further and would require that both variables reference the <strong>same</strong> array to be strictly equal.  Therefore, these values are not equal by both <code>value</code> and <code>type</code> and the if condition is skipped.</p>
<p dir="auto">The second condition says if the values are <code>loosely equal</code>, which means equal in <code>value</code> but not necessarily in <code>data type</code>: print 'Radio'.  Since the types are different (<code>array</code> and <code>string</code>) Javascript attempts to <code>implicitly coerce</code> one or both of the values before comparison. An empty string and an empty array coerce to the same value.  The rules of that coercion are complicated, unintuitive, and depend on the context of the coercion and the data types involved.  Suffice it to say that in this case, they are considered 'equal values' and the code prints 'Radio'</p>
</article>
  </div>

    </div>

  </readme-toc>

  

  <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button data-close-dialog="" type="submit" data-view-component="true" class="btn">  Go
</button>
</form>    </details-dialog>
  </details>


</div>



  </div>
</div>

    </main>
  </div>

  </div>

          <footer class="footer width-full container-xl p-responsive" role="contentinfo">


  <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
    <ul class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mt-2 mt-lg-0 d-flex flex-items-center">
        <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com">
          <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>        <span>
        &copy; 2022 GitHub, Inc.
        </span>
      </li>
    </ul>
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-8 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="631bdea72bce6f805aa1a5dc629d98e7a3a6a037118cbdb3cdec6f3b52dc37bf" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="7a7ea1cd487a5197a90b730691bcc815966f067fbf64fbe329b13db917e6119b" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="7b84f151356b259b325cc6ef5d842b3f78e8b6bb975513791323f4233df93357" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="61818c951c2055f01ca7be5f3b5d7811d7af6111633add7ebb72ded2fe2971a8" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}">Status</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://support.github.com?tags=dotcom-footer" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="98ef5802464761188a9cc9c51897971c50aa5516c3ca9e77be2c54674c137b6c" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="e6763c67afb6e57c938b823bc7f9cde6fb1fe4b6ba476a006a1df82ea53dfbe1" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;}">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="91fac545d49f0bbf73dab231ef1e554fdd47792ad6a6ae2f46e396cda21bc947" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;}">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="bbf9ccd2771b3a28938fb692a0cb5985da392580418ace82919aaba569310063" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;}">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;,&quot;originating_url&quot;:&quot;https://github.com/jefflovell/js109/blob/main/written-exam/exercises.md&quot;,&quot;user_id&quot;:56492231}}" data-hydro-click-hmac="69ae9f14d3c0efca79ae69962fc5758a875cdb36c91402c83f10f10062a31e79" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;}">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 color-fg-muted"></span>
  </div>
</footer>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
    <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal" aria-labelledby="box-title">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
  </div>
</div>

    <template id="snippet-clipboard-copy-button">
  <div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>


    <style>
      .user-mention[href$="/shaneziegler"] {
        color: var(--color-user-mention-fg);
        background-color: var(--color-user-mention-bg);
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
        padding: 0 2px;
      }
    </style>


  </body>
</html>

