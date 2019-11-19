const validate = s =>
  !!s &&
  s[0] === s[0].toUpperCase() &&
  s.slice(-1) === '.'

console.log(validate() === false);
console.log(validate('') === false);
console.log(validate('Hello there') === false);
console.log(validate('hello there.') === false);
console.log(validate('Hello there.') === true);
