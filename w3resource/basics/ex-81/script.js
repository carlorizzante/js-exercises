const fn = n => Math.floor(n / 10) + n % 10

console.log(fn(27) === 9);
console.log(fn(13) === 4);
console.log(fn(30) === 3);
