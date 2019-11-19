const find = (n, mod) => {
  if (mod === 1) return n
  let result = n
  while (Math.abs(n) > 1) {
    n /= mod
    if (Number.isInteger(n)) result = n
    else break
  }
  return result
}

const find_2 = (n, mod) => {
  if (mod === 1) return n
  while (n % mod === 0) n /= mod
  return n
}

console.log(find(16, 4) === 1);
console.log(find(-12, 2) === -3);
console.log(find(13, 2) === 13);
console.log(find(13, 1) === 13);
console.log('---');
console.log(find_2(16, 4) === 1);
console.log(find_2(-12, 2) === -3);
console.log(find_2(13, 2) === 13);
console.log(find_2(13, 1) === 13);
