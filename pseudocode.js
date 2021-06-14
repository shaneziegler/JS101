// a function that returns the sum of two numbers
// a function that takes an array of strings, and returns a string that is all those strings concatenated together
// a function that takes an array of integers, and returns a new array with every other element

//! Function takes in two numbers
//! The two numbers are added togther
//! the sum is returned

----

//! Function take in an array of strings
//! Create a new empty string variable for concatenation
//! Iterate through the strings in the array one by one
//!   - Add the string for each loop to the concatenation string
//! Return the concatenation string

-----

//! Function take in an array of integers
//! Create new empty array
//! Initialize counter at 0
//! Iterate through all the integers in the array
//!   - If index is even numbered then add it to the new array
//! Return the new array

----

Keyword	Meaning
START	start of the program
SET	set a variable that we can use for later
GET	retrieve input from user
PRINT	display output to user
READ	retrieve a value from a variable
IF/ELSE IF/ELSE	show conditional branches in logic
WHILE	show looping logic
END	end of the program

------

START

# Given 2 numbers called "number1" and "number2"

SET newnumber = number1 + number2

Return newnumber

END

-----

START

# Given an array of strings

SET newString = 0
SET iterator = 1

WHILE interator <= number of strings in array
  SET currentString = string within strings collection at space "iterator"
  newString = newString + currentString
  interator = iterator + 1

Return newString

END

-----

START

# Given an array of integers

SET newArray = 0
SET iterator = 1

WHILE interator <= number of integerss in array
  SET currentNumber = value within integers collection at space "iterator"
  IF currentNumber = an even number
    Append currentNumber to newArray
  ELSE
    do nothing and go on to the next iteration
  interator = iterator + 1

Return newString

END


