const verifyString = (s, c) => {
  const count = s.split('').reduce((count, char) => char === c ? count += 1 : count, 0)
  return count >= 2 && count <= 4
}

console.log(verifyString("Python", "y") === false);
console.log(verifyString("JavaScript", "a") === true);
console.log(verifyString("Console", "o") === true);
console.log(verifyString("Pino in pinocchio or tree", "o") === true);
console.log(verifyString("Pino in pinocchio or pino", "o") === false);
