
What happens here?
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));

/*
shane
We start with the nested array [[1,2],[3,4]]
The map method is run on that array which created a new array
Each sub array element is passed to the callback function which is console.log(arr[0])
console.log outputs the first element of the subarray - 1 and 3
console.log returns undefined which is put in the new array created by the .map method
[undefined, undefined] is returned by the .map method
*/



[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});


/*
shane

We start with the array literal `[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]` which contains two object elements.  Each object has 
two elements.  The `filter` method is performed on the array.  The callback function block `return Object.keys(object).every(key => object[key][0] === key);`
is passed to the `filter`method.  The objects keys are passed to the `every` method which has a callback function that finds the elements that have the 
first character of their string which is strictly equal to the key and returns a truthy value.  `filter` returns an array of [ { c: 'cat', d: 'dog' } ]
*/

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});


/*
shane

The variable `myArr` is assigned the value undefined because `.forEach' returns undefined.  We iterate through the nested array object literal.
Each subarray is passed to a `map` method which has a callback function that logs the elements that are greater than 5 to the console.  The callback
function in the `map` method returns the element that are greater than 5 to the `arr` array, which is not used.  The output to the console is 18 7 12.

*/

/* 
Can you take this code apart, just like before? What will it output and what will the value of myArr be? Check the solution below once you have tried this on your own. 
*/


let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

console.log(myArr);


/*
Edris
in this problem, the variable `myArr` is declared using `let`. The variable acts as a pointer to the array expressed. The `forEach` method is called on that array, and the callback of the `forEach` call is returning the return value of the nested `map` method. `map` is called on each sub array of the original array, and checks each element with an `if` conditional, for whether that element is greater than 5. If the condition is true, it returns a console.log(num) statement, which logs to the console that number and returns `undefined`. The final value of `myArr` is an array of undefined, undefined.
*/

/* MyArr will be assigned to undefined since forEach always returns undefined. It will log 18, 7, 12. The return value of the callback will be: [undefined, undefined] for each element: .map() will explicitly return undefined for all elements greater than 5 (console.log() always returns undefined) and will implicitly return undefined otherwise, as there is no return value in those other cases. However, forEach doesn't do anything with the return values of the callback function.
*/

/* This code will output the numbers 18, 7, 12. The `forEach` method is called on the array and returns undefined. The `map` method takes each number in the nested subarrays and within its callback function evaluates whether it's value is greater than 5. If true, it logs that number. The value of myArr will be undefined. `map` and `console.log` 

*/


/*
shane

The variable `myArr` is assigned the value undefined because `.forEach' returns undefined.  We iterate through the nested array object literal.
Each subarray is passed to a `map` method which has a callback function that logs the elements that are greater than 5 to the console.  The callback
function in the `map` method returns undefined for each sub array, which is not used.  The output to the console is 18 7 12.

*/











/*
Edris
in this problem, the variable `myArr` is declared using `let`. The variable acts as a pointer to the array expressed. 
The `forEach` method is called on that array, and the callback of the `forEach` call is returning the return value of 
the nested `map` method. `map` is called on each sub array of the original array, and checks each element with an `if` 
conditional, for whether that element is greater than 5. If the condition is true, it returns a console.log(num) statement, 
which logs to the console that number and returns `undefined`. The final value of `myArr` is an array of undefined, undefined.
*/

/* MyArr will be assigned to undefined since forEach always returns undefined. It will log 18, 7, 12. The return value of 
the callback will be: [undefined, undefined] for each element: .map() will explicitly return undefined for all elements 
greater than 5 (console.log() always returns undefined) and will implicitly return undefined otherwise, as there is no 
return value in those other cases. However, forEach doesn't do anything with the return values of the callback function.
*/

/* This code will output the numbers 18, 7, 12. The `forEach` method is called on the array and returns undefined. 
The `map` method takes each number in the nested subarrays and within its callback function evaluates whether it's 
value is greater than 5. If true, it logs that number. The value of myArr will be undefined. `map` and `console.log` 

*/


For exam prep, I just went through a bunch of different examples in the course text and tried to explain them in written assessment fashion, then self-critiqued and that actually worked pretty well to make my explanations more concise. I'm always surprised at how much different my own writing looks when I look at it a second time- obviously practicing with someone is great too but you can definitely improve a lot just by self-editing
During the exam, there isn't a timer on the assessment screen so make sure you have your own timer going on the side
Make sure you run the code for each question that asks "what does this log and why?" and if you get confused, run it line by line in node. I had a couple "uh oh, why did it do that" moments and when I ran it line by line I eventually found the source of my confusion
Make sure you read the question and answer it like it asks- not every question will be "what does this log and why?"
Like Marc said, it's really useful to have the list of concepts on the study guide up on a word doc, that way when you have a question where you answer why a piece of code did something, you can just scan through that list of answers and find the concepts that are relevant to the question
I was really jittery and nervous the first 10 or so minutes and my typing suffered as a result, but I just kept typing and then I got into a nice rhythm and ended up finishing with like 20 minutes to go. Don't kick yourself early if you're not typing as well as you want to
Make sure you have a three-hour block set aside where you know you're not going to have any sort of contact with the world outside of your computer- I had my roommate ask me a couple questions which wasn't a huge deal but it definitely took me out of my flow a little bit
Don't panic if you feel like you have to google something- I did for a number of questions