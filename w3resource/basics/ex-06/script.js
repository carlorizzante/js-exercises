// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php

const isLeapYear = y =>
  y % 100 === 0
  ? y % 400 === 0
  : y % 4 === 0

console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(2001) === false);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1800) === false);
console.log(isLeapYear(100) === false);
