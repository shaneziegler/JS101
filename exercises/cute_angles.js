// JS101
//Easy 5
// cute Angles

// Write a function that takes a floating point number representing an angle between 0 and 360 degrees 
// and returns a string representing that angle in degrees, minutes, and seconds. 
// You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, 
// and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


// input - floating point number
// output - string of the angle in deg(˚), min(') and secs(");
// 60 minutes in a degree and 60 seconds in a minute
// example - dms(76.73);        // 76°43'48"
// data structures - none - just variables
// algo - get the integer portion of the number for the degrees
//    60 / remaining decimal portion of number to get minutes.  mult by 100 and take integer portion
//  60 / remaining to get seconds 

function dms(angle) {
  let degrees = parseInt(angle);
  angle -= degrees;
  let minutes = String(parseInt(60 * angle));
  let seconds = String(parseInt(60 * ((60 * angle) - minutes)));
  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }
  return `${degrees}˚${minutes}'${seconds}"`;
}

// LS solution
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}