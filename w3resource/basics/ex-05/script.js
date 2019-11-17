// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
//
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-5.php

const animate_string = id => {
  const element = document.getElementById(id)
  const textNode = element.childNodes[0]
  let text = textNode.data

  setInterval(() => {
    const lastChar = text[text.length - 1]
    const substring = text.substring(0, text.length - 1)
    text = lastChar + substring
    textNode.data = text
  }, 100)
}

animate_string('text')
