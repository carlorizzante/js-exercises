// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php

const calcArea = (a, b, c) => {
  const s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

console.log(calcArea(5, 6, 7))
