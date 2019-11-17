const validate = (a, b, c) =>
  a % 10 === b % 10 ||
  b % 10 === c % 10 ||
  c % 10 === a % 10

console.log(validate(22,22,123) === true);
console.log(validate(23,22,123) === true);
console.log(validate(22,21,123) === false);
