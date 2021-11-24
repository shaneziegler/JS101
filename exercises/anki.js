let words = ['go', 'ahead', 'and', 'jump'];
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);


let newArr =[];
console.log(newArr);


let str = "How many UPPERcase letters, are in. this strig?!?!?";

let uppercase = str.match(/[A-Z]/g) || [];
let lowercase = str.match(/[a-z]/g) || [];
let neither = str.match(/[^A-Z]/gi) || [];

let obj = {
  lowercase: lowercase.length,
  uppercase: uppercase.length,
  neither: neither.length
};

console.log(obj);

let word = 'shane';

let reg = new RegExp(word, 'gi');

console.log(reg);

console.log('SHANE ZIEGLER'.match(reg));


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};