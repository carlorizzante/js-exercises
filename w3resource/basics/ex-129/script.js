const find = n => {
  for (let i = n + 1; true; i++) {
    let prime = true
    for (let j = 2; j**2 <= i; j++) {
      if (i % j === 0) {
        prime = false
        break
      }
    }
    if (prime) return i
  }
}

console.log(find(3) === 5);
console.log(find(3));
console.log(find(17) === 19);
