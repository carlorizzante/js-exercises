const find = n => {
  let sum = n
  while (n > 0) {
    n = Math.floor(n / 2)
    sum += n
  }
  return sum
}

console.log(find(8) === 15);
console.log(find(9) === 16);
console.log(find(26) === 49);
