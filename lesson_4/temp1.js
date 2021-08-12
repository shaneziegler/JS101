let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produce) {
  let arr = Object.entries(produce).filter(pair => pair[1] === 'Fruit');
  return Object.fromEntries(arr);
}



function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= 2;
    counter += 1;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
myNumbers;                // => [1, 4, 3, 7, 2, 6]


function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddNumbers(myNumbers);  // => [2, 4, 6, 14, 2, 6]

// not mutated
myNumbers;                    // => [1, 4, 3, 7, 2, 6]


function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= 2;
    counter += 1;
  }
}

function multiply(numbers, mult) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * mult;

    counter += 1;
  }

  return numbers;
}

let arr = [2, 4, 6];
arr.length = 5;
console.log(arr);              // [2, 4, 6, <2 empty items> ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2']
