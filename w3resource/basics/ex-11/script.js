// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-11.php

const C2F = celsius => `${(9 * celsius + 32 * 5) / 5}\xB0C`
const F2C = fahrenheit => `${(5 * (fahrenheit - 32)) / 9}\xB0F`

console.log(C2F(60));
console.log(F2C(140));
