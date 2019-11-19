const find = n => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i**3
  }
  return sum
}

console.log(find(3) === 1**3 + 2**3 + 3**3);
console.log(find(4) === 1**3 + 2**3 + 3**3 + 4**3);
