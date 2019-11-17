// Write a JavaScript program to check a given integer is within 20 of 100 or 400.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-19.php

const testFor100Or400 = n =>
  Math.abs(100 - n) <= 20 || Math.abs(400 - n) <= 20

console.log(testFor100Or400(10) === false);
console.log(testFor100Or400(90) === true);
console.log(testFor100Or400(99) === true);
console.log(testFor100Or400(199) === false);
console.log(testFor100Or400(200) === false);
console.log(testFor100Or400(410) === true);
