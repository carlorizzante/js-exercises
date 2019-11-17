// Write a JavaScript exercise to get the extension of a filename.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-14.php

const getFileExtension = filename => {
  return filename.split('.').pop()
}

console.log(getFileExtension('file.jpg'))
console.log(getFileExtension('file.txt'))
