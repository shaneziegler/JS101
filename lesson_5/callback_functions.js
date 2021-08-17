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
method call (forEach)	      The outer array	             None	          undefined	                            Yes, assigned to myArr 
callback execution	        Each sub-array	            None	          undefined	                             No
method call (map)           Each sub-array              None  /////////////

element reference ([0])	      Each sub-array	            None	          Element at index 0 of sub-array	      Yes, used by console.log
method call (console.log)	  Element at index 0        Outputs a string    undefined	                          No 
                            of each sub-array	      representation of an Integer	                  

element reference ([0])       Each sub-array              None            Element at index 0 of sub-array       Yes, explictly returned by callback
                                                                                                                for map transformation return array



