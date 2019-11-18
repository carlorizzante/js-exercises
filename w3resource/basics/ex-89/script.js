const validate = (x, y, z) =>
  x + y === z ||
  x - y === z ||
  x * y === z ||
  x / y === z

console.log(validate(10, 20, 200) === true);
console.log(validate(10, 2, 5) === true);
console.log(validate(10, 7, 17) === true);
console.log(validate(10, 7, 3) === true);
console.log(validate(10, 7, 8) === false);
