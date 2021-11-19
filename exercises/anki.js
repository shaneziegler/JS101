let words = ['go', 'ahead', 'and', 'jump'];
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newArr = flintstones.reduce((a, b) => a.concat(b), []);

console.log(newArr);