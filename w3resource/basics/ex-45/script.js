const validate = (a, b, check=15) =>
  a === 15 || b === 15 ||
  a + b === check ||
  Math.abs(a - b) === check

console.log(validate(15, 9) === true);
console.log(validate(25, 15) === true);
console.log(validate(7, 8) === true);
console.log(validate(25, 10) === true);
console.log(validate(5, 9) === false);
console.log(validate(7, 9) === false);
console.log(validate(9, 25) === false);
