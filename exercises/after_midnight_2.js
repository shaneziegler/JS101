// js 101
// easy 5
// after midnight part2

// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 
// If the number of minutes is positive, the time is after midnight. 
// If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, 
// and return the number of minutes before and after midnight, respectively. 
// Both functions should return a value in the range 0..1439.
// Disregard Daylight Savings and Standard Time and other irregularities.

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);


const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

function afterMidnight(time) {
  let timeArr = time.split(':');
  return Number((Number(timeArr[0] % 24) * MINUTES_IN_HOUR) + Number(timeArr[1]));
}

function beforeMidnight(time) {
  let timeArr = time.split(':');
  return (MINUTES_IN_DAY - Number(((Number(timeArr[0]) % 24) * MINUTES_IN_HOUR) + Number(timeArr[1]))) % MINUTES_IN_DAY;
}

