const testNumber = (n, a=3, b=7) =>
  n % a === 0 ||
  n % b === 0

console.log(testNumber(12) === true);
console.log(testNumber(14) === true);
console.log(testNumber(10) === false);
console.log(testNumber(11) === false);
