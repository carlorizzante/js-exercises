const fn = arr => {
  if (arr.length % 2 !== 0) return false
  for (let i = 0; i < arr.length; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
  return arr
}

console.log(fn([1,2,3,4,5,6])); // [2,1,4,3,6,5]
console.log(fn([1,2,3,4,5,6,7]) === false);
console.log(fn([])); // []
