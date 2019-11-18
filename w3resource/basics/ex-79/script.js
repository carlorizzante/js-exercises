const fn = arr =>
  arr.reduce((count, val) => val === 30 ? count += 1 : count, 0) === 2 ||
  arr.reduce((count, val) => val === 40 ? count += 1 : count, 0) === 2

console.log(fn([30,30]) === true);
console.log(fn([40,40]) === true);
console.log(fn([30,40]) === false);
