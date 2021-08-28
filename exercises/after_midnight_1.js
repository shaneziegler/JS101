// js101
// easy5
// after midnigth part 1

// The time of day can be represented as the number of minutes before or after midnight. 
// If the number of minutes is positive, the time is after midnight. 
// If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
// Your function should work with any integer input.

// You may not use javascript's Date class methods.
// Disregard Daylight Savings and Standard Time and other complications.


console.log(timeOfDay(-4231) === "01:29");

// The tests above should log true.

// input - number - represents number is minutes before or after midnight
// output - string - in 24 hour time format formatted to "hh:mm"

// example and edge cases - can accept positive and negative numbers
// positve are minuts past 00:00 midnight
// negative are mins before 00:00 midnight
// inputs great than 1 day of minutes need to be converted to fit in a 24 hour time frame

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");

// ds - probably just some variables
// algo - for positive numbers - take num and div by 60 to floor, that should give hours.  num mod by 60 should give minutes
// negative numbers maybe take number of mins in a day and sub the num from it, then same math as positive
// for numbers greater than the number of minutes in a day mod by the num of minutes in a day

function timeOfDay(num) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_IN_DAY = HOURS_PER_DAY * MINUTES_IN_HOUR;

  num %= MINUTES_IN_DAY;
  if (num < 0) {
    num = MINUTES_IN_DAY + num;
  }

  let hours = Math.floor(num / MINUTES_IN_HOUR);
  let minutes = num % MINUTES_IN_HOUR;

  return formatTime(hours, minutes);
}

function formatTime(hours, mins) {
  return (hours < 10 ? "0" + +hours : hours) + ':' + (mins < 10 ? "0" + +mins : mins);
}