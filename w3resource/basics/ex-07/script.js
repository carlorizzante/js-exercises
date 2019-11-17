// Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-7.php

console.log('----');

for (let year = 2014; year <= 2050; year++) {
  const date = new Date(year, 0, 1)
  const january1st = date.getDay()
  if (january1st === 0) {
    console.log(`January 1st is a Sunday in the year ${year}. Hurra!`);
    console.log('----');
  }
}
