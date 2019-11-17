// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php

const divide = () => {
  console.log('divide');
  const n1 = document.getElementById('n1').value
  const n2 = document.getElementById('n2').value
  document.getElementById('result').innerHTML = n1 / n2
}

const multiply = () => {
  console.log('multiply');
  const n1 = document.getElementById('n1').value
  const n2 = document.getElementById('n2').value
  document.getElementById('result').innerHTML = n1 * n2
}
