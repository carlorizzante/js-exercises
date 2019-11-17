// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-17.php

const difference = (n, base) => n > 19
  ? 3 * (n - base)
  : base - n

console.log(difference(12, 19) === 7);
console.log(difference(19, 19) === 0);
console.log(difference(22, 19) === 9);
