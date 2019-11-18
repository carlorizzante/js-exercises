const find = arr => {
  let deltas = []
  for (let i = 0; i < arr.length - 1; i++) {
    deltas.push(Math.abs(arr[i] - arr[i + 1]))
  }
  return deltas.sort((a, b) => b - a)[0]
}

console.log(find([1,2,6,4,5]) === 6-2);
console.log(find([1,5,6,4,5]) === 5-1);
console.log(find([10,51,61,4,54]) === 61-4);
