const handleString = s => s
  .split('')
  .map(char => char.charCodeAt(0))
  .map(code => code === 122 || code === 90
    ? code - (90 - 65)
      : code === 57
        ? code - 9
        : code + 1
  )
  .map(code => String.fromCharCode(code))
  .join('')

console.log(handleString('abcdef') === 'bcdefg');
console.log(handleString('az') === 'ba');
console.log(handleString('AZ') === 'BA');
console.log(handleString('09') === '10');
