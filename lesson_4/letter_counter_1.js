// JS 101
// Easy 4
// Letter Counter Part 1

// Write a function that takes a string consisting of zero or more space separated words 
// and returns an object that shows the number of words of different sizes.
// NOTE: Words consist of any sequence of non-space characters.

function wordSizes(sentence) {
  let wordSizes = {};
  if (sentence.trim().length === 0) return wordSizes;
  let wordArray = sentence.split(' ');
  wordArray.forEach(element => {
    wordSizes[element.length] ? wordSizes[element.length] += 1 : wordSizes[element.length] = 1;
  });
  return wordSizes;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}