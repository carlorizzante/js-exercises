const validate = (low, high, n) =>
  n >= 40 && n <= 10000 &&
  n >= low && n <= high

console.log(validate(40, 4000, 45) === true);
console.log(validate(80, 320, 79) === false);
console.log(validate(89, 4000, 30) === false);
