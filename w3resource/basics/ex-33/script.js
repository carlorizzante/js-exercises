const bothInRange = (a, b) =>
  (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
  (a >= 70 && a <= 100 && b >= 70 && b <= 100)

console.log(bothInRange(44, 56) === true);
console.log(bothInRange(70, 95) === true);
console.log(bothInRange(50, 89) === false);
