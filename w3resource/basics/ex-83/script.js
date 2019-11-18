const findLongestString = arr =>
  arr.reduce((longest, s) => s.length > longest.length ? s : longest, '')

console.log(findLongestString(['a', 'bcv', 'hello', 'hi']) === 'hello');
console.log(findLongestString(['a', 'hello', 'hi', 'bcv']) === 'hello');
