//

let x = 5;

const test2 = function (a) {
  return a * 2;
}

const test3 = a => a * 2;

console.log(test1(x));

console.log(test2(x));

console.log(test3(x));

function test1(a) {
  return a * 2;
}



let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);



let bottles = 10;

function decrementBottles(bottles) {
  console.log('first');
  console.log(bottles);
  console.log('second');
  bottles -= 1;
  console.log('third');
  console.log(bottles);
  console.log('fourth');
}

decrementBottles(); // undefined
console.log(bottles); // 10

let arr = [1,2,3];

arr.slice()


