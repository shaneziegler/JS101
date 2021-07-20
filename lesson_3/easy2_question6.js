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

flintstones = flintstones.reduce((accumlator, currentValue) => accumlator + ',' + currentValue).split(',');
