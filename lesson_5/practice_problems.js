// JS101
// Lesson 5
// Practice Problems

// 1. desending sort

let arr = ['10', '11', '9', '7', '8'];

> arr.sort((a, b) => Number(b) - Number(a));

// 2. How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));

// 3. For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

arr1[2][1][3];
arr2[1].third[0];
arr3[2].third[0][0];
obj1.b[1];
Object.keys(obj2.third)[0];

// 4. For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
arr2[2] = 4;
obj1.first[2][0] = 4;
obj2.a.a[2] = 4;

// 5. Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(Object.entries(munsters).filter(a => a[1].gender === 'male').reduce((acc, elm) => acc + elm[1].age, 0));

// LS solution 1
let totalMaleAge = 0;
for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}
console.log(totalMaleAge); // => 444

// LS solution 2
let memberDetails = Object.values(munsters);
let totalMaleAge = 0;
memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});

// 6. Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

for(person in munsters) {
  console.log(`${person} is a ${munsters[person].age}-year-old ${munsters[person].gender}.`);
}

// LS Solution
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

// 7. Given the following code, what will the final values of a and b be? Try to answer without running the code.
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// a = 2
// b = [3, 8]
// arr = [4, [3, 8]]

// 8. Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => arr.forEach(str => str.split('').forEach(char => {
  if (['a','e','i','o','u'].includes(char)) {
    console.log(char);
}})));

// LS Solution - pretty much the same
let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

// 9. Given the following data structure, return a new array with the same structure, 
// but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(innerArr => typeof innerArr[0] === 'string' ? innerArr.slice().sort() : innerArr.slice().sort((a, b) => a - b));

// LS solution
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// 10. Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference;
// sort the elements in descending order.
//! rewrite using sort only instead of sort.reverse - dont look at ls solution

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(innerArr => typeof innerArr[0] === 'string' ? innerArr.slice().sort().reverse() : innerArr.slice().sort((a, b) => b - a));

// LS Solution
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// 11. Given the following data structure, use the map method to return a new array identical in structure to the original but, 
// with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(subObj => {
  let newObj = {};
  for (prop in subObj) {
    newObj[prop] = subObj[prop] + 1;
  }
  return newObj;
});

// 12. Given the following data structure, use a combination of methods, including filter, 
// to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

newArr = arr.map(subArr => subArr.filter(elm => elm % 3 === 0));

// 13. Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

//Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


arr.sort((a,b) => {
  console.log(a);
  console.log(b);
  a.reduce((oddSum, elm) => {
    if (elm % 2 === 1) {
      return oddSum += elm;
    } else {
      return oddSum;
    }}, 0) - b.reduce((oddSum, elm) => {
      if (elm % 2 === 1) {
        return oddSum += elm;
      } else {
        return oddSum;
      }}, 0)
});

