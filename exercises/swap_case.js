// js101
// string processing
// swap case

// Write a function that takes a string as an argument and returns that string with every 
// lowercase letter changed to uppercase and every uppercase letter changed to lowercase. 
// Leave all other characters unchanged.

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}