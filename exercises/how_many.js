//js101
//easy5
//how many?

// Write a function that counts the number of occurrences of each element in a given array. Once counted, 
// log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

function countOccurrences(arr) {
  let occur = {};
  arr.forEach(element => {
    if (element in occur) {
      occur[element] += 1;
    } else {
      occur[element] = 1;
    }
  });

  for (let prop in occur) {
    console.log(prop + " " + occur[prop]);
  }
}