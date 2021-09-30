// js101
// Interpretive problem solving
// 1000 lights

// You have a bank of switches before you, numbered from 1 to count.
// Every switch is connected to exactly one light that is initially off.
// You walk down the row of switches and toggle every one of them, that is,
// you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass.
// On this second pass, you toggle switches 2, 4, 6, and so on.
// Now, every other light is on. On the third pass, you go back to the beginning again,
// this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and 
// returns an array of the lights that are on after count passes.

// in - an integer - which is the number of switched and the count of passes to run on them
// out - an array of integers that that correspond to the lights that are on.  if 2 lights are on then array length will be 2

// ds - output array
// and array to hold the light states

// algo:
// create an array of count length elements
// set all elements in the array to false for off
// set passcounter to 1
// iterate over the array count times
//  - if light number(idx + 1) is divisible by the current pass number then toggle the light
//  - increment pass counter
// create output array from light array elements that are true
// return output array

function lightsOn(switches) {
  let arr = [...Array(switches)].map(elm => false);

  let passCounter = 0;
  while (true) {
    passCounter += 1;
    arr = arr.map((light, idx) => ((idx + 1) % passCounter === 0) ? !light : light);
    if (passCounter === switches) break;
  }

  let outArr = [];
  arr.forEach((elm, idx) => {
    if (elm) outArr.push(idx + 1);
  });

  return outArr;
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]