const findNearest = (a, b, check=100) =>
  Math.abs(a - check) < Math.abs(b - check)
    ? a : b

console.log(findNearest(90, 89) === 90);
console.log(findNearest(-90, -89) === -89);
console.log(findNearest(90, 90) === 90);
