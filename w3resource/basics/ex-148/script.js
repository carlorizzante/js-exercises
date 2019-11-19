const fn = arr =>
  [...arr.slice(Math.floor(arr.length / 2)), ...arr.slice(0, Math.floor(arr.length / 2))]

console.log(fn([1,2,3,4])); // [3,4,1,2]
console.log(fn([1,2,3,4,5])); // [4,5,3,1,2]
console.log(fn([1,2,3,4,5,6])); // [4,5,6,1,2,3]
