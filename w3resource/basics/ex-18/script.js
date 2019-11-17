// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-18.php

const testFor50 = (a, b) =>
  a === 50 || b === 50 || a + b === 50

console.log(testFor50(50, 50) === true);
console.log(testFor50(20, 50) === true);
console.log(testFor50(20, 20) === false);
console.log(testFor50(20, 30) === true);
