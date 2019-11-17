// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-16.php

const sumTriple = (a, b) => a === b
  ? 3 * (a + b)
  : a + b

console.log(sumTriple(10, 20) === 30);
console.log(sumTriple(10, 10) === 60);
