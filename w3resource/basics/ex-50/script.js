// const handleString = s => s
//   .split('')
//   .reduce((string, char) =>
//     string.charAt(string.length - 1) === ' '
//       ? string + char.toUpperCase()
//       : string + char
//     , ' ')
//   .trim()

const handleString = s => s
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.substring(1))
  .join(' ')

console.log(handleString('the quick brown fox') === 'The Quick Brown Fox');
console.log(handleString('the quick brown fox'));
