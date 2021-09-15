// JS101
// Medium 2
// Triangle Sides

// Write a function that takes the lengths of the three sides of a triangle as arguments 
// and returns one of the following four strings representing the triangle's classification: 
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater 
// than the length of the longest side, and every side must have a length greater than 0. 
// If either of these conditions is not satisfied, the triangle is invalid.

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

function triangel(side1, side2, side3) {
  if (!(side1 > 0) || !(side2 > 0) || !(side3 > 0)) return "invalid";
  if (side1 === side2 && side2 === side3) return "equilateral";


  if (side1 !== side2 && side2 !== side3 && side1 !== side3) return "scalene";
  return "isosceles";
}

function triangle(...sides) {
  if (sides[0] === sides[1] && sides[1] === sides[2]) return "equilateral";
  sides.sort((a,b) => a - b);
  if (sides[0] <= 0) return "invalid";
  if ((sides[0] + sides[1]) <= sides[2]) return "invalid";
  if (sides[0] !== sides[1] && sides[1] !== sides[2] && sides[0] !== sides[2]) return "scalene";
  return "isosceles";
}