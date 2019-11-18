const find = (arr, n) => {
  let sums = []
  for (let i = 0; i <= arr.length - n; i++) {
    let j = n - 1
    let sum = 0
    while (j >= 0) {
      sum += arr[i + j]
      j -= 1
    }
    sums.push(sum)
  }
  return sums.sort((a, b) => b - a)[0]
}

console.log(find([1,2,3,4,5,6], 2) === 11);
// console.log(find([1,2,3,4,5,6], 2), 11);
console.log(find([10,12,13,41,51,16], 2) === 92);
// console.log(find([10,12,13,41,51,16], 2), 92);
console.log(find([10,12,13,41,51,11], 3) === 105);
// console.log(find([10,12,13,41,51,11], 3), 105);
