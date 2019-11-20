const find = n => {
  if (n === 0) return true
  if (n === 1) return false
  return find(Math.abs(n) - 2)
}

console.log((find(12) === true));
console.log((find(121) === false));
