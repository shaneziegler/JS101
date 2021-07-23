let munstersDescription = "The Munsters are creepy and spooky.";

let munstersCaseSwapped = munstersDescription.split('').map(char =>
  (char === char.toUpperCase() ? char.toLocaleLowerCase() : char.toLocaleUpperCase())).join('');

console.log(munstersCaseSwapped);
