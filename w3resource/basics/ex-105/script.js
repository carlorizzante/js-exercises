const find = n => {
  const aux = (n, count) => {
    if (n < 10) {
      return [n, count]
    } else {
      const sum = n
        .toString()
        .split('')
        .map(s => Number(s))
        .reduce((sum, val) => sum += val, 0)
      count += 1
      return aux(sum, count)
    }
  }
  return aux(n, 0)[1]
}

console.log(find(4) === 0);
console.log(find(123) === 1);
console.log(find(156) === 2);
