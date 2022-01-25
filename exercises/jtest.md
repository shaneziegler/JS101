const item1 = { size: 'small', color: 'red' };
const item2 = { size: 'large', color: 'blue' };
const item3 = { size: 'medium' };

const item4 = item2;
item4.color = item3.color;
item4.size = item3.size;
item1.size = item2.size;

// more code below this line

There are `4` variables in this code and `3` objects.

On line 1, the constant variable `item1` is declared and initialized to reference the object `{ size: 'small', color: 'red' }` in memory.  On line 2, the constant variable `item2` is declared and initialized to reference the object `{ size: 'large', color: 'blue' }` in memory.  On line 3, the constant variable `item3` is declared and initialized to reference the object `{ size: 'medium' }` in memory.  On line 5, the constant variable `item4` is declared and initialized to reference the memory location that the variable `item2` is pointing to, making both variables reference the same object in memory.  On line 6, the `color` property of the object that the `item4` variable is pointing to, is reassigned to `undefined`, this is because there currently is no `item3.color` property and accessing a non-existent property of an object returns `undefined`.  On line 7, the `size` property of the object that the `item4` variable is pointing to, is reassigned to the string `medium`, since that is the value held by the `size` property of the object referenced by the `item3` pointer variable.  The pointer variables `item2` and `item4` still reference the same object in memory, so the object pointed to by both `item2` and `item4` in memory looks like this: `{ size: 'medium', color: undefined }`.  Finally on line 8, the `size` property of the object that the `item1` variable is pointing to, is reassigned the value held by the `size` property of the object referenced by the `item2` pointer variable, which is the string `medium`.  The object referenced by the `item1` pointer variable now looks like: `{ size: 'medium', color: 'red' }`.


This code demonstrates variables as pointers.  Instead of having a variable hold an actual value, like it does with primitive values, a variable as a pointer holds the memory address of an object instead and 'points to' or 'references' that object.  When assigning a variable to another variable that points to an object, instead of copying the object or pointing to that variable, the memory location that the pointer variable is pointing to is instead copied in, making both variables reference the same object in memory.