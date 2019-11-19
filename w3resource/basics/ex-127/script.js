const fn = n =>
  parseInt(n.toString(2).split('').reverse().join(''), 2)

console.log(fn(56) === 7);
console.log(fn(234) === 87);
