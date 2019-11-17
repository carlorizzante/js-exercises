// Write a JavaScript exercise to create a variable using a user-defined name.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-13.php

const key = 'abc'
this[key] = 'some value'
console.log(this[key]);
