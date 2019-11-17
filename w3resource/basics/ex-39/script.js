const compute = (a, b) => {
  const sum = a + b
  return sum >= 40 && sum <= 80
    ? 65 : 80
}

console.log(compute(30, 20) === 65);
console.log(compute(90, 80) === 80);
