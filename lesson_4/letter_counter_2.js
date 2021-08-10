// JS 101
// Easy 4
// Letter Counter Part 2

// Write a function that takes a string consisting of zero or more space separated words 
// and returns an object that shows the number of words of different sizes.
// NOTE: Words consist of any sequence of non-space characters.

function wordSizes(sentence) {
  let wordSizes = {};
  if (sentence.trim().length === 0) return wordSizes;
  let wordArray = sentence.split(' ');
  wordArray.forEach(element => {
    let parsedWord = removeNonLetters(element);
    wordSizes[parsedWord.length] ? wordSizes[parsedWord.length] += 1 : wordSizes[parsedWord.length] = 1;
  });
  return wordSizes;
}

function removeNonLetters(string) {
  string = string.replace(/[^a-zA-Z0-9]/g, "");
  return string;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}