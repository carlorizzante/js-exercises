const inRange = (a, b, c) =>
  a <= b && b <= c

console.log(inRange(1,2,3) === true)
console.log(inRange(10,12,31) === true)
console.log(inRange(5,9,3) === false)
console.log(inRange(1.2,1.4,1.45) === true)
