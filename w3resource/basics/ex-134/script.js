const handleString = s => s
  .split('')
  .map(char => char.charCodeAt(0) % 'a'.charCodeAt(0))
  .map(code => String.fromCharCode('z'.charCodeAt(0) - code))
  .join('')

console.log(handleString('a') === 'z');
console.log(handleString('z') === 'a');
console.log(handleString('abcxyz') === 'zyxcba');
console.log(handleString('python') === 'kbgslm');
