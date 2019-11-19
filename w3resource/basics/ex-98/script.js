const fn = s => {
  let count = 0
  s.split('').forEach(char => char === char.toLowerCase() ? count += 1 : count -= 1)
  return count > 0 ? s.toLowerCase() : s.toUpperCase()
}

console.log(fn('Hello') === 'hello');
console.log(fn('HELlo') === 'HELLO');
