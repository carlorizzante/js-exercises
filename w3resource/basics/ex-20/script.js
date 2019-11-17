// Write a JavaScript program to check from two given integers, if one is positive and one is negative.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-20.php

const OnePosOneNeg = (a, b) => (a * b) < 0

console.log(OnePosOneNeg(2, 2) === false);
console.log(OnePosOneNeg(-2, 2) === true);
console.log(OnePosOneNeg(2, -2) === true);
console.log(OnePosOneNeg(-2, -2) === false);
