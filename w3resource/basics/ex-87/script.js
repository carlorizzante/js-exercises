const validate = (a, b) =>
  a.length === b.length
    ? a.reduce((count, val, index) => val !== b[index] ? count += 1 : count, 0) <= 1
      ? true : false
    : false

console.log((validate([1,2,3], [1,2,3]) === true));
console.log((validate([1,2,3], [1,4,3]) === true));
console.log((validate([1,2,3], [1,4,5]) === false));
