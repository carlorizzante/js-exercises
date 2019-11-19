const find = (arr, mark) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push(Math.abs(arr[i] - arr[j]))
    }
  }
  return result
    .filter(n => n <= mark)
    .sort((a, b) => b - a)
    [0]
}

console.log(find([12,10,33,34], 10) === 2);
console.log(find([12,10,33,34], 24) === 24);
console.log(find([12,10,33,44], 40) === 34);
