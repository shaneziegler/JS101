function objectHasProperty(object, property) {
  return object[property] ? 1 : 2;
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
};

objectHasProperty(obj, 'something'); 
objectHasProperty(obj, 'active');   

This code will not always give the expected result because of truthiness and how the ternary operator works.  It would give the wrong results, if you passed it the arguments `(obj, 'enabled')` or `('obj', 'result')` or if the `obj` object had a property with any other `falsy` values like  `0`, `NaN`, `""`, `false`, `null`, or `undefined`.  


function objectHasProperty(object, property) {
  return object.hasOwnProperty(property) ? 1 : 2;
}


This code demonstrates the concept of truthiness.  Truthiness allows the use of non-boolean data types in conditions, comparisons, and other operations that normally expect a boolean `true` or `false` value.  Truthiness uses implicit coercion to cause an expression to be evaluated as `true` or `false`.  Values/expressions that can be coerced to evaluate to `true` are called `truthy`, while values/expressions that can be coerced to evaluate to `false` are called `falsy`.

