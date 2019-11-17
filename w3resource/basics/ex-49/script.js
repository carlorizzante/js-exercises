const handleString = s => s
  .split('')
  .map(char => char.charCodeAt(0))
  .map(code => code === 122 || code === 90
    ? String.fromCharCode(code - (122 - 97))
    : code === 57
      ? String.fromCharCode(code - 9)
      : String.fromCharCode(code + 1)
  )
  .join('')

console.log(handleString('welcome'));
console.log(handleString('az'));
console.log(handleString('WELCOME'));
console.log(handleString('AZ'));
console.log(handleString('0123456789'));
console.log(handleString('w3r'));
