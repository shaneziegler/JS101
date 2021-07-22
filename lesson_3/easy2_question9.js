// Back in the stone age (before CSS), we used spaces to align things on the screen. 
// If we have a 40-character wide table of Flintstone family members, 
// how can we center the following title above the table with spaces?

// My solution
let title = "Flintstone Family Members";
let centeredTitle = title.padStart(((40 - title.length) / 2) + title.length, " ");

// (40 - title.length) / 2

// Launch solution
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length);