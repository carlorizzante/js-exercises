const find = n => n
  .toString()
  .split('')
  .map(n => Number(n))
  .reduce((count, n) => n % 2 === 0 ? count += 1 : count, 0)

console.log(find(123) === 1);
console.log(find(1020) === 3);
console.log(find(102) === 2);
