const validate = (a, b) =>
  a.reduce((check, n) => check || b.includes(n), false)

console.log(validate([1,2,3], [3,4,5]) === true);
console.log(validate([1,2,3], [7,8,1]) === true);
console.log(validate([1,2,3], [7,8,9]) === false);
