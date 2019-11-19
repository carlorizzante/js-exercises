const find = arr => arr
  .reduce((max, n) => n % 2 === 0 && n > max ? n : max, 0)

console.log(find([1,2,3,4,5,6,7,8,9]) === 8);
console.log(find([2,5,1,45,12,34,65,23,56,11,17]) === 56);
