// JS101
// Easy 3
// what century is that?

// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01.
// So, the years 1901 - 2000 comprise the 20th century.

//  Version using working on it as a string
function century(year) {
  let century = String(~~((year - 1) / 100) + 1);

  switch (century[century.length - 1]) {
    case '1':
      if (century.slice(century.length - 2) === '11') {
        century += 'th';
      } else {
        century += 'st';
      }
      break;
    case '2':
      if (century.slice(century.length - 2) === '12') {
        century += 'th';
      } else {
      century += 'nd';
      }
      break;
    case '3':
      if (century.slice(century.length - 2) === '13') {
        century += 'th';
      } else {
      century += 'rd';
      }
      break;
    default:
       century += 'th';
  }
  return century;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


// Version using working on it as a number
function century(year) {
  let century = ~~((year - 1) / 100) + 1;
  let lastTwoDigits = century % 100;
  let ending = '';

  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    ending = 'th';
  } else {
    switch (century % 10) {
      case 1: ending = 'st'; break;
      case 2: ending = 'nd'; break;
      case 3: ending = 'rd'; break;
      default: ending = 'th';
    }
  }
  return String(century) + ending;
}