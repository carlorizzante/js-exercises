const validate = (a, b) =>
  a % 7 === 0 || a % 11 === 0
    ? b % 7 !== 0 && b % 11 !== 0
    : b % 7 === 0 || b % 11 === 0

console.log(validate(14, 21) === false);
console.log(validate(14, 20) === true);
console.log(validate(16, 20) === false);
