const handleString = s => s
  .toLowerCase()
  .split('')
  .sort()
  .map((char, index) => index === 0
    ? char.toUpperCase()
    : char
  )
  .join('')

console.log(handleString('Python'));
console.log(handleString('Javascript'));
