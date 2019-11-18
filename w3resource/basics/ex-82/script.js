const fn = (a, b) => {
  let result = 0
  let x = 1
  while (a > 0 && b > 0) {
    result += ((a + b) % 10) * x
    a = Math.floor(a / 10)
    b = Math.floor(b / 10)
    x *= 10
  }
  return result
}



console.log(fn(222, 911) === 133);
console.log(fn(222, 911));
console.log(fn(123, 711) === 834);
console.log(fn(123, 711));
