let flintstones = {
  Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5
};

let newFlint = Object.entries(flintstones).filter(element => element[0] === 'Barney').flat();

console.log(newFlint);


// Launch solution
// The shift() method removes the first element from an array and returns that removed element. 
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

// Pop() should also work, since only 1 element in array
Object.entries(flintstones).filter(pair => pair[0] === "Barney").pop();