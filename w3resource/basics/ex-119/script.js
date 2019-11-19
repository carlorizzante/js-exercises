const validate = n => {
  const digits = n
    .toString()
    .split('')
    .map(n => Number(n))
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] > digits[i + 1]) return false
  }
  return true
}

console.log(validate(1234) === true);
console.log(validate(12334) === true);
console.log(validate(1934) === false);
