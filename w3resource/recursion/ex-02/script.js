const primes = n => {
  const primes = []
  const numbers = new Array(n + 1).fill(true)
  for (let i = 2; i <= n; i++) {
    if (numbers[i]) {
      primes.push(i)
      for (let j = 1; i * j <= n; j++) {
        numbers[i * j] = false
      }
    }
  }
  return primes
}

const find = (a, b) => !b
  ? a
  : find(b, a % b)

console.log(primes(0)); // []
console.log(primes(3)); // [2,3]
console.log(primes(10)); // [2,3,5,7]
console.log(primes(20)); // [2,3,5,7,11,13,17,19]
console.log('---');
console.log(find(4, 6) === 2);
console.log(find(6, 9) === 3);
console.log(find(2*3*5*7*11, 2*2*5*7*9) === 2*3*5*7);
console.log(find(2154, 458) === 2);
console.log(find(458, 2154) === 2);
console.log(find(24, 36) === 12);
console.log(find(24, 34) === 2);
