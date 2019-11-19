const isUpperCase = char => char === char.toUpperCase()
const isLowerCase = char => char === char.toLowerCase()
const isAlpha = char => char.search(/[^A-Za-z\s]/) === -1

const validate = s =>
  s.split('').reduce((check, char, index) => check && isAlpha(char) && (index % 2 === 0 ? isUpperCase(char) : isLowerCase(char)), true) ||
  s.split('').reduce((check, char, index) => check && isAlpha(char) && (index % 2 === 0 ? isLowerCase(char) : isUpperCase(char)), true)


console.log(isUpperCase('A') === true);
console.log(isUpperCase('b') === false);
console.log(isLowerCase('w') === true);
console.log(isLowerCase('U') === false);
console.log('---');
console.log(isAlpha('w') === true);
console.log(isAlpha('U') === true);
console.log(isAlpha('7') === false);
console.log(isAlpha('.') === false);
console.log('---');
console.log('aAa', validate('aAa') === true);
console.log('AaA', validate('AaA') === true);
console.log('aaAa', validate('aaAa') === false);
console.log('aAaBaI', validate('aAaBaI') === true);
console.log('AaBbCc', validate('AaBbCc') === true);
console.log('AaaBbCc', validate('AaaBbCc') === false);
console.log('aAa7aI', validate('aAa7aI') === false);
console.log('aAaBaI.', validate('aAaBaI.') === false);
