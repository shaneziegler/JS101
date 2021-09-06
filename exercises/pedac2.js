// palidrome

- if input args are not numbers then return "not valid"
- if input args are less than 0 then rreturn "not valid"
- initialize empty array for returning list of palindromes
- init palidrome found count to 0
- init current_num variable to "num"
- loop while palindrome count < "s"
  - if current_num is a palidrome then add to palindrome array and increment found count - use helper function to test for palidromes
  - increment current_num

- return palidrome array

- palidrome helper function
  - input is a Number
  - convert number to a string
  - if string is equal to itself reversed then return true - otherwise return false
  - length of palidrome >= 2