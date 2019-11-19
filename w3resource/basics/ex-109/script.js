const find_1 = n => {
  let count = 0
  const primes = []
  for (let i = 2; i <= n; i++) {
    let flag = true
    for (let j = 2; j <= n; j++) {
      count++
      if (j === i) break
      if (i % j === 0) {
        flag = false
        break
      }
    }
    if (flag) primes.push(i)
  }
  // console.log('find_1', primes.length, count);
  return primes
}

const find_2 = n => {
  let count = 0
  const primes = []
  for (let i = 2; i <= n; i++) {
    let flag = true
    for (let j = 2; j * 2 < i; j++) {
      count++
      if (j === i) break
      if (i % j === 0) {
        flag = false
        break
      }
    }
    if (flag) primes.push(i)
  }
  // console.log('find_2', primes.length, count);
  return primes
}

const find_3 = n => {
  let count = 0
  const primes = []
  const numbers = new Array(n).fill(true)
  for (let i = 2; i <= n; i++) {
    if (numbers[i]) {
      primes.push(i)
      for (let j = 1; i * j <= n; j++) {
        count++
        numbers[i * j] = false
      }
    }
  }
  // console.log('find_3', primes.length, count);
  return primes
}

function sort_prime(num) {
  let count = 0
  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        count++
        prime_num2[i * j] = false;
      }
    }
  }
  // console.log('sort_prime', prime_num1.length, count);
  return prime_num1;
}

console.log(find_3(1).length === 0); // [2,3,5]
console.log(find_3(1)); // []
console.log(find_3(5).length === 3); // [2,3,5]
console.log(find_3(5)); // [2,3,5]
console.log(find_3(11).length === 5); // [2,3,5,7,11]
console.log(find_3(11)); // [2,3,5,7,11]
console.log(find_3(19).length === 8); // [2,3,5,7,11,13,17,19]
console.log(find_3(19)); // [2,3,5,7,11,13,17,19]
console.log(find_3(100).length === 25);
console.log(find_3(100));
// console.log(find_3(1000).length === 168);
// console.log(find_3(1000));
// console.log(find_3(10000).length === 1229);
// console.log(find_1(10000));
// console.log(find_2(10000));
// console.log(find_3(10000));
// console.log(sort_prime(10000));
