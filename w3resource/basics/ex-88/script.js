const validate = (a, b, mod) =>
  (a % mod === 0 && b % mod === 0) ||
  (a % mod !== 0 && b % mod !== 0)


console.log((validate(10,25,5) === true));
console.log((validate(9,15,3) === true));
console.log((validate(9,15,7) === true));
console.log((validate(10,23,5) === false));
