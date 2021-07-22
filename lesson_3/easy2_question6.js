let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

flintstones = [...flintstones, ...["Barney", "Betty"], ...["Bambam", "Pebbles"]];
console.log(flintstones);


// Convert from nested array to single level using flat
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
flintstones = flintstones.flat();

//flatten using concat
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flinstones = [].concat(...flintstones);

//flatten using reduce
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// flintstones = flintstones.reduce((accumlator, currentValue) => accumlator + ',' + currentValue).split(',');

flintstones = flintstones.reduce((accumlator, currentValue) => {return accumlator.concat(currentValue)},[]);
// flintstones.split(',');

flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// doesnt work - spread breaks any passed in single string down into individual characters
flintstones = flintstones.reduce((accumlator, currentValue) => {
  console.log(`acc: ${accumlator}`);
  console.log(`currval: ${currentValue}`);
  let x = [...accumlator, ...currentValue];
  console.log(`combined so far: ${x}\n`);
  return x;
});

// doesnt work without the split on the end, because is working on strings, not arrays and 
// combines them into a single string which must then be converted into an array
flintstones = flintstones.reduce((accumlator, currentValue) => accumlator + ',' + currentValue).split(',');



// Launch and MDN inplementation
// If you don't use an empty array as the initial value, then it starts making a string
flintstones = flintstones.reduce((accumlator, currentValue) => {
  return accumlator.concat(currentValue);
}, []);

//foreach version
flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

newArray = [];
flintstones.forEach(element => newArray = newArray.concat(element));
// flintstones.forEach(function (element) {
//   newArray = newArray.concat(element)
// });

// flintstones.forEach(element => {
//   console.log(element);
//   newArray = newArray.concat(element);
// });

// flintstones.forEach(element => newArray = newArray.concat(element));