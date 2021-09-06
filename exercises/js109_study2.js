/*The objective is to return all pair of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.*/




console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []



Given two strings, return the characters that are not common in the two strings.

Examples & Test Cases
console.log(uniqueStringCharacters("xyab","xzca") == "ybzc");
console.log(uniqueStringCharacters("a","z") == "az");
console.log(uniqueStringCharacters("abcd","de") == "abce");
console.log(uniqueStringCharacters("abc","abba") == "c");
console.log(uniqueStringCharacters("xyz","zxy") == "");