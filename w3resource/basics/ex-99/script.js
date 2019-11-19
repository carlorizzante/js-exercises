const validate = (a, b) =>
  a.split('').sort().join('') === b.split('').sort().join('')

console.log(validate('a', 'a') === true);
console.log(validate('ab', 'ba') === true);
console.log(validate('abc', 'bca') === true);
console.log(validate('abc', 'bce') === false);
console.log(validate('abc', 'abcd') === false);
