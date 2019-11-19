const isPrime = n => {
  for (let i = 2; i**2 <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}

const find = n => {
  const primes = []
  const result = []
  for (let i = 2; i <= n; i++) {
    while ((primes.includes(i) || isPrime(i)) && n % i === 0) {
      if (!primes.includes(i)) primes.push(i)
      if (!result.includes(i)) result.push(i)
      n /= i
    }
  }
  return result
}

console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(4) === false);
console.log(isPrime(5) === true);
console.log(isPrime(6) === false);
console.log(isPrime(7) === true);
console.log(isPrime(8) === false);
console.log(isPrime(19) === true);
console.log(isPrime(19) === true);
console.log(isPrime(101) === true);
console.log('---');
console.log(find(100)); // [2,5]
console.log(find(101)); // [101]
console.log(find(103)); // [103]
console.log(find(104)); // [2,13]
console.log(find(105)); // [3,5,7]
console.log(find(10500000)); // [2,3,5,7]
console.log(find(2*3*5*7*11*13*17*19*23)); // [2,3,5,7,11,13,17,19,23]
console.log(find(2*3*5*7*11*13*17*19*23*2)); // [2,3,5,7,11,13,17,19,23]
