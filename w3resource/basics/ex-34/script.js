const findLargest = (a, b) =>
  a >= 40 && a <= 60 && b >= 40 && b <= 60
    ? Math.max(a, b)
    : null

console.log(findLargest(45, 60) === 60);
console.log(findLargest(25, 60) === null);
console.log(findLargest(45, 80) === null);
