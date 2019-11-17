const inRange = (a, b, c) =>
  (a <= 99 && a >= 50) ||
  (b <= 99 && b >= 50) ||
  (c <= 99 && c >= 50)

console.log(inRange(50, 90, 99) === true);
console.log(inRange(5, 9, 199) === false);
console.log(inRange(65, 89, 199) === true);
console.log(inRange(65, 9, 199) === true);
