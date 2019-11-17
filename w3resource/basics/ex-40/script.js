const validate = (a, b, n=8) =>
  a === 8 || b === 8 || a + b === 8 || a - b === 8

console.log(validate(1, 8) === true);
console.log(validate(8, 3) === true);
console.log(validate(5, 3) === true);
console.log(validate(2, 6) === true);
console.log(validate(12, 4) === true);
console.log(validate(13, 4) === false);
console.log(validate(1, 4) === false);
