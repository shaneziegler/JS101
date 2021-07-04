let a = 1;
let b = 2;

console.log(a);
console.log(b);

let c = 0;

while (c <= 50) {
  console.log(c);
  c++;
  if (c === 35) {
    debugger;
    console.log(a);
  }
}
