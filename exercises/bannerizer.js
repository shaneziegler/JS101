// JS101
// Easy 3
// Bannerizer

function logInBox(str) {
  let boxWidth = str.length + 2;
  let emptyLine = '|' + ' '.repeat(boxWidth) + '|';
  let horizontalBorder = '+' + '-'.repeat(boxWidth) + '+';

  console.log(horizontalBorder);
  console.log(emptyLine);
  console.log('| ' + str + ' |');
  console.log(emptyLine);
  console.log(horizontalBorder);
}

logInBox('To boldly go where no one has gone before.');

