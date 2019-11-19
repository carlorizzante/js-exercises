const validate = (arr, n) => {
  for (let i = 0; i < n; i++) {
    if (!arr.includes(i + 1)) return false
  }
  return true
}

console.log(validate([1,2,3,4,5], 5) === true)
console.log(validate([1,2,3,5], 5) === false)
