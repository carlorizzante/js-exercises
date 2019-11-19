const validate = n => Math.max(n, 15)

console.log(validate(1) === 15);
console.log(validate(7) === 15);
console.log(validate(16) === 16);
console.log(validate(71) === 71);
