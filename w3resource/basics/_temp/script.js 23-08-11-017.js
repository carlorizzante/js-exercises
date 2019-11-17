// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const today = new Date()
const day = today.getDay()

console.log(`Today is ${weekdays[day]}.`)

const hour24 = today.getHours()
const minute = today.getMinutes()
const second = today.getSeconds()

const suffix = hour24 >= 12 ? 'PM' : 'AM'
const hour12 = hour24 % 12

console.log(`Current time: ${hour12}:${minute}:${second} ${suffix}`)
