const validate = (...rest) => {
  const sorted = [...rest].sort((a, b) => b - a)
  return sorted[1] >= 20 && sorted[1] < sorted[0]
}

console.log(validate(23, 45, 10) === true);
console.log(validate(23, 23, 10) === false);
console.log(validate(21, 66, 75) === true);
console.log(validate(10, 23, 66, 75) === true);
