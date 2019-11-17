const checkNumbers = (a, ...rest) =>
  [...rest].reduce((last, num) => last && a.toString().slice(-1) === num.toString().slice(-1), true)

const validate = (a, ...rest) =>
  [...rest].reduce((check, num) => check && a % 10 === num % 10, true)

console.log(checkNumbers(10, 20, 30) === true);
console.log(checkNumbers(11, 21, 31) === true);
console.log(checkNumbers(11, 22, 31) === false);
console.log(checkNumbers(1, 211, 11, 3409581) === true);
console.log(checkNumbers(7, 2) === false);
console.log('--');
console.log(validate(10, 20, 30) === true);
console.log(validate(11, 21, 31) === true);
console.log(validate(11, 22, 31) === false);
console.log(validate(1, 211, 11, 3409581) === true);
console.log(validate(7, 2) === false);
