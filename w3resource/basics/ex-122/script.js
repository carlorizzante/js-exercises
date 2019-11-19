const validate = arr => {
  if (arr[0] > arr.slice(-1)) arr.reverse()
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false
  }
  return true
}

console.log(validate([5]) === true)
console.log(validate([1,2,3,4,5]) === true)
console.log(validate([4,2,1]) === true)
console.log(validate([4,2,3,1]) === false)
console.log(validate([1,3,6,4,10]) === false)
console.log(validate([10,3,6,4,10]) === false)
