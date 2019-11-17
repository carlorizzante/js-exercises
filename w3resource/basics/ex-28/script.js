const inRange = (a, b) =>
  (a <= 99 && a >= 50) || (b <= 99 && b >= 50)

console.log(inRange(12, 101) === false);
console.log(inRange(52, 80) === true);
console.log(inRange(15, 99) === true);
