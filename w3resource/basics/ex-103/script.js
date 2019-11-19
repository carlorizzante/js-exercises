const find = n => {
  const arr = n
    .toString()
    .split('')
    .map(s => Number(s))
  return arr
    .reduce((result, digit, index) => [
      ...result,
      [...arr.slice(0, index), ...arr.slice(index + 1)]
    ], [])
  .map(arr => Number(arr.join('')))
  .sort((a, b) => b - a)
  [0]
}

console.log(find(100) === 10);
console.log(find(10) === 1);
console.log(find(1245) === 245);
