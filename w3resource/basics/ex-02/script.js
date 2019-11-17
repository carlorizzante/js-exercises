// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

const today = new Date()
const d = today.getDate()
const m = today.getMonth() + 1
const yyyy = today.getFullYear()

const dd = d < 10 ? `0${d}` : d
const mm = m < 10 ? `0${m}` : m

console.log(`${mm}-${dd}-${yyyy}`);
console.log(`${mm}/${dd}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
console.log(`${dd}/${mm}/${yyyy}`);
