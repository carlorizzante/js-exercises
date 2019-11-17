// Write a JavaScript program to calculate number of days left until next Christmas.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php

const daysToChristmas = () => {
  const oneDay = 1000 * 24 * 60 * 60
  const today = new Date()
  const xmas = today.getMonth() === 11 && today.getDate() > 25
    ? new Date(today.getFullYear() + 1, 11, 25)
    : new Date(today.getFullYear(), 11, 25)

  console.log(`${Math.ceil((xmas.getTime() - today.getTime()) / oneDay)} days left to Christmas`);
}

daysToChristmas()
