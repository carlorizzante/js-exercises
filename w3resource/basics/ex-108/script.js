const find = (a, b) => {
  if (a.length !== b.length) return false
  let result = 0
  for (var i = 0; i < a.length; i++) {
    result += a[i] * b[i]
  }
  return result
}

const find_reduce = (a, b) => a.reduce((result, val, index) => result + val * b[index], 0)

console.log(find([1,2,3], [1,2,3]) === 14);
console.log(find([2,4,6], [2,4,6]) === 56);
console.log(find([1,1,1], [0,1,-1]) === 0);
console.log('---');
console.log(find_reduce([1,2,3], [1,2,3]) === 14);
console.log(find_reduce([2,4,6], [2,4,6]) === 56);
console.log(find_reduce([1,1,1], [0,1,-1]) === 0);
