// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-8.php

const guessMyNumber = () => {
  const num = Math.ceil(Math.random() * 10).toString()
  const guessed = prompt('Guess my number (1 to 10)')
  if (guessed === num) console.log('Good job!');
  console.log(`You guessed ${guessed}, I thought ${num}.`);
}

guessMyNumber()
