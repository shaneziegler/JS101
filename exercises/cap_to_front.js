// cap to front 
// edabit

capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"


// in - string
// out - string

// ds - array

// turn input string into an array - arr
// set swapped boolean to false
// do an outer loop
// - iterate over the chacters in the array from left to right - starting at second element arr[1]
//    - if current element is a cap letter and the element to the left(curr index - 1) is also a cap letter, then dont do anything
//    - if current element is a cap letter and the element to the left(curr index - 1) is not a cap letter, then swap the 2 elements
//      and set swapped to true
// end outer loop when swapped is still false
// turn array back into a string
// return string


function capToFront(str) {
  let arr = str.split('');
  let swapped = false;

  do {
    swapped = false;
    for (let idx = 1; idx < arr.length; idx++) {
      if ((arr[idx] === arr[idx].toUpperCase()) && !(arr[idx-1] === arr[idx-1].toUpperCase())) {
        [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr.join('');
}