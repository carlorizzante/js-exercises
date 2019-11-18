const fn = arr => arr.includes(1) || arr.includes(3)

console.log(fn([1,2]) === true);
console.log(fn([5,3]) === true);
console.log(fn([2,4]) === false);
