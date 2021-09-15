// JS101
// Medium 2
// Unlucky Days

// Some people believe that Fridays that fall on the 13th day of the month are unlucky days. 
// Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. 
// You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. 
// You may also assume that the same calendar will remain in use for the foreseeable future.

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2


function fridayThe13ths(year) {
  let fridayCount = 0;
  for (let month = 0; month <= 11; month++) {
    let singleDay = new Date(year, month, 13);
    if (singleDay.getDay() === 5) {
      fridayCount += 1;
    }
  }
  return fridayCount;
}
