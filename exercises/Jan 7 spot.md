


// What is returned? what is output? Are any errors thrown?
// why? What is the fundamental principle?


let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }]; // [0x1234, 0x1235, 0x1236]
let copyOfArr = [...arr]; // => [{a: 'foo'}, {b: 'bar'}, {c: 'baz'}, <empty space>, [{d: 'qux'}]]

//[0x1234, 0x1235, 0x1236]

copyOfArr[4] = [{d: 'qux'}];
console.log(copyOfArr); // [{a: 'foo'}, {b: 'bar'}, {c: 'baz'}, <empty space>, {d: 'qux', e: 'xyz'}]

arr[2].c = 'abc';
arr[4].e = 'xyz';
console.log(arr); // [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];



// let a = 1 == 1 ? true : false; // true

// function hello(arg) {
//   console.log(arg);
// }

// hello(a);


maybe 7 kyu or easy 6 kyu

// Create a function that takes a string as an argument and return an object
// with letters of the string and their occurrence as properties:
// countOccurences('abbab'); // => {a:2, b: 3}

-count each letter in the string

function countOccurrences(string) {
  let result = {}
  
  string.split('').forEach(char => {
    result[char] ? result[char] += 1 : result[char] = 1;
  });
  
  return result;
}

console.log(countOccurrences('abbab')); // => {a:2, b: 3}


8 kyu 2 mins
7 kyu 10 mins

