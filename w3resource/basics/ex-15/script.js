// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-15.php

const difference = (n, base) => n <= base
  ? base - n
  : 2 * (n - base)

console.log(difference(32, 13) === 38);
console.log(difference(11, 13) === 2);
