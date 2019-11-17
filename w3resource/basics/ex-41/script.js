const validate = (a, b, c) =>
  a === b && b === c && c === a
    ? 30
    : a === b || b === c || c === a
      ? 40
      : 20

console.log(validate(8,8,8) === 30);
console.log(validate(8,1,8) === 40);
console.log(validate(8,1,3) === 20);
