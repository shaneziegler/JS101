// JS101
// Advanced 1
// Madlibs revisited


function madlibs(template) {
  const randomWord = arr => arr[Math.floor(Math.random() * arr.length)];

  const madObj = {
    adj: ['quick','lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adv: ['easily', 'lazily', 'noisily', 'excitedly']
  };

  for (let prop in madObj) {
    while (template.includes('[' + prop + ']')) {
      template = template.replace('[' + prop + ']', randomWord(madObj[prop]));
    }
  }

  return template;
}

let template1 = "The [adj] brown [noun] [adv] [verb] the [adj] yellow [noun], who [adv] [verb] his [noun] and looks around.";
let template2 = "The [noun] [verb] the [noun]'s [noun].";


console.log(madlibs(template1));

console.log(madlibs(template2));