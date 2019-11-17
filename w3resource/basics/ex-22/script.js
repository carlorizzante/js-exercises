// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-22.php

const remove_char = (s, pos) => s.substring(0, pos) + s.substring(pos + 1)

console.log(remove_char('Python', 0) === 'ython');
console.log(remove_char('Python', 3) === 'Pyton');
console.log(remove_char('Python', 5) === 'Pytho');
