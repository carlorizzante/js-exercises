// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-21.php

const string_check = (prefix, s) => s.toLowerCase().substring(0, 2) === prefix.toLowerCase()
  ? s
  : prefix + s

console.log(string_check('Py', 'Python') === 'Python');
console.log(string_check('Py', 'thon') === 'Python');
