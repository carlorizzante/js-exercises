const find = n => {
  let count = 0
  for (let i = 0; i <= n; i++) {
    count += i + 1
    if (count > n) return i
  }
}

console.log(find(11) === 4);
console.log(find(15) === 5);
