// JS101
// Text and String Processin
// Search String 2 - Not using RegEx

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

let text2 = 'sed and the Sed and the SED and the sed.  when sed the, sed car went to the sed, wow thats sed!!!';

console.log(searchWord('sed', text2));

function searchWord(word, text) {
  let arr = text.split(' ');
  let highlightedWord = '**' + word.toUpperCase() + '**';

  arr.forEach((elm, idx) => {
    if (elm.toLowerCase().indexOf(word.toLowerCase()) === 0) {
      arr[idx] = arr[idx].toLowerCase();
      arr[idx] = arr[idx].replace(word, highlightedWord);
    }
  });
  return arr.join(' ');
}

// in - word and text string
// out - text string with some words highlighted

// ds - maybe an array to hold each word or punc mark

// algo :
// split text string into an array delimited by a space
// iterate over the array
//  - compare input word to array element - case insensitive
// - if array element comtains the word starting at index 0 then replace word with highligted version of word - ***WORD***
// combine array back into newstring
// return the newstring

