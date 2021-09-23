// JS 101
// Debugging JS
// Word Ladders

// A "ladder" is simply an array of word strings;
// Gemma decides to transform this array into a single string where each word within the string is separated by a hyphen ('-').
//  For example, the array ['pig', 'pie', 'lie', 'lit', 'let'] should be printed as the string 'pig-pie-lie-lit-let'.

// Upon first glance,
// Gemma's code below looks like it should work. But it throws a TypeError, saying: 
// Cannot read property 'forEach' of undefined. Why is that?

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
});

console.log(ladder) // expect: head-heal-teal-tell-tall-tail


// error is caused by missing semi-colon after "let ladder = '' "

//! Semicolons should always terminate a statement. With no semicolon to separate them, 
//! JavaScript sometimes sees the next statement as part of the former statement, which leads to undesired behavior.