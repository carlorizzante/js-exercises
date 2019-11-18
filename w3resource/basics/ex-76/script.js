const fn = arr => [arr[0], ...arr.slice(-1)]

console.log(fn([1]));
console.log(fn([1,2,3]));
console.log(fn([1,2,3,4,5]));
