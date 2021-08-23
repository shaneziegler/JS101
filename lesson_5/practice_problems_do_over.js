// js101
// lesson 5
// practice problems do over
//

// 1.  

let arr = ['10', '11', '9', '7', '8'];


arr.sort((a, b) => Number(b) - Number(a));

// 2.

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));

// 3. access g

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

// 4. change 3 to 4

let arr1 = [1, [2, 3], 4];
let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
let obj1 = { first: [1, 2, [3]] };
let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
arr2[2] = 4;
obj1.first[2][0] = 4;
obj2.a.a[2] = 4;

// 5. sum abnd display total age of male me=mbers

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;
let arr = Object.values(munsters);
arr.forEach(obj => {
  if (obj.gender === 'male') {
    totalAge += obj.age;
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
//(Name) is a (age)-year-old (male or female).

Object.entries(munsters).forEach(arr => {
  let name = arr[0];
  let age = arr[1].age;
  let gender = arr[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
})

