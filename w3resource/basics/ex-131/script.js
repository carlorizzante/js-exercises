const find = arr => arr
  .reduce((result, n, index) => [...result, n + (result[index - 1] ? result[index - 1] : 0)], [])

console.log(find([1,2,3,4,5])); // [1,3,6,10,15]
console.log(find([1,2,-3,4,5])); // [1,3,0,4,9]
