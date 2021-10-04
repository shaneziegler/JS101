// JS101
// Advanced 1
// Merge Sort

let temp = mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
console.log(temp);
// mergeSort([5, 3]);                 // [3, 5]
// mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

function mergeSort(arr) {
  debugger;
  let temparr = [];
  if (arr.length > 1) {
    let midpoint = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, midpoint);
    let arr2 = arr.slice(midpoint);
    temparr.push(arr1);
    temparr.push(arr2);
    console.log(temparr);
    mergeSort(temparr);
  } else {
    temparr.push(arr);
  }
  return temparr;
}