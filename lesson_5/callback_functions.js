// JS101
// Lesson 5
// Callback function notes

Action	                    Performed on	            Side Effect	      Return Value	                        Is Return Value Used?
method call (map)	          The outer array	             None	          New array ([undefined, undefined])	  No, but shown on line 4
callback execution	        Each sub-array	            None	          undefined	                            Yes, used by map for transformation
element access ([0])	      Each sub-array	            None	          Element at index 0 of sub-array	      Yes, used by console.log
method call (console.log)	  Element at index 0        Outputs a string    undefined	                          Yes, used as the return 
                            of each sub-array	      representation of an Integer	undefined	                    value of the callback



// Example 3

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

Action	                    Performed on	            Side Effect	      Return Value	                        Is Return Value Used?
method call (map)	          The outer array	             None	          New array ([1, 3])	                  No, but shown 
callback execution	        Each sub-array	            None	          Number at index 0 of sub-array	      Yes, used by map for transformation
element reference ([0])	      Each sub-array	            None	          Element at index 0 of sub-array	      Yes, used by console.log
method call (console.log)	  Element at index 0        Outputs a string    undefined	                          No 
                            of each sub-array	      representation of an Integer	                  

element reference ([0])       Each sub-array              None            Element at index 0 of sub-array       Yes, explictly returned by callback
                                                                                                                for map transformation return array

// Example 4

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

Action	                    Performed on	            Side Effect	      Return Value	                        Is Return Value Used?
-variable declaration
method call (forEach)	      The outer array	             None	          undefined	                            Yes, assigned to myArr 
callback execution	        Each sub-array	            None	          undefined	                             No
method call (map)           Each sub-array              None            Array of undefined                      Not really
callback execution	        Each sub-array	            None	          undefined	                              Yes, used by map for transformation
conditional staement(num>5) Each element in sub-array   None            undefined                               No
element reference (num)	    Each element in sub-array	  None	          ??                                     Yes, used by console.log
method call (console.log)	  Element of each         Outputs a string    undefined	                             Yes, explictly returned
                             sub-array	           representation of an Integer	                               for map transformation return array


                             [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
                              return Object.keys(object).every(key => object[key][0] === key);
                            });



                            [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
                              return arr.filter(item => {
                                if (typeof item === 'number') {    // if it's a number
                                  return item > 13;
                                } else {
                                  return item.length < 6;
                                }
                              });
                            });

                            [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
                              return arr.filter(item => {
                                if (typeof item === 'number') {    // if it's a number
                                  return item > 13;
                                } else {
                                  return item.length < 6;
                                }
                              });
                            });

example 8 

                            [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {  // [[1], [2], [3], [4]]]
                              return element1.forEach(element2 => {   // [1] - element2
                                return element2.filter(element3 => {  // 1 - element 3
                                  return element3.length > 0;
                                });
                              });
                            });


// example 9

[[[1, 2], [3, 4]], [5, 6]].map(arr => {  [[1, 2], [3, 4]]  // and then [5, 6]
  return arr.map(elem => {  // [1, 2] then [3, 4] then 5 then 6 
    if (typeof elem === 'number') { // it's a number  // 5 or 6
      return elem + 1;  // turns into 6 and 7
    } else {                  // it's an array   // [1,2] or [3,4]
      return elem.map(number => number + 1); // turns into [2,3] and [4, 5]
    }
  });
});

[[[2, 3], [4, 5]], [6, 7]]