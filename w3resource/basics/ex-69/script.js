const sum = (...rest) => [...rest].reduce((sum, n) => sum + n, 0)

console.log(sum(1,2,3) === 6);
console.log(sum(1,2,3,4) === 10);
console.log(sum(2,3,4) === 9);
