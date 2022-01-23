let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }

  console.log(cities[i].length);
}


On line X, the `console.log` method is invoked with the value of the variable `i` passed as an argument, which gets output to the screen.

On line X, the `console.log` method is invoked with the value of the property `cities[i].length` passed as an argument, which outputs the length of each element to the screen.

the argument passed to the function is the element of the array at each given iteration



Lines 3 to 9 define a loop that will execute until the condition `i < citi` is found to be `true`. When the loop begins, it first declares and initializes the block scoped variable `i` to `0`.  On each iteration of the loop, `i` will be incremented by `1`.