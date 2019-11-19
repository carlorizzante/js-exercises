const find = (arr, n) => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) break
    if (arr[i] % 2 === 0) count += 1
  }
  return count
}

console.log(find([1,2,3,4,5,6,7,8], 5) === 2);
console.log(find([1,2,3,4,5,6,7,8], 5));
console.log(find([1,3,5,6,7,8], 6) === 0);
console.log(find([1,3,5,6,7,8], 6));
console.log(find([1,3,5,6,7,8,10], 11) === 3);
console.log(find([1,3,5,6,7,8,10], 11));
