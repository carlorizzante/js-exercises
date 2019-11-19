const isUpperCase = s => s === s.toUpperCase()
const isLowerCase = s => s === s.toLowerCase()

const fn = s => s
  .split('')
  .map(c => /[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase())
  .join('')

console.log(fn('Python') === 'pYTHON');
console.log(fn('hElLo') === 'HeLlO');
