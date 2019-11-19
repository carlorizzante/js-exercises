const factorial = n => {
  if (n === 1) return n
  else return n * factorial(n - 1)
}

const find_1 = n => {
  let count = 0
  let fact = factorial(n)
  while (fact > 10) {
    if (fact % 10 === 0) count += 1
    else break
    fact /= 10
  }
  return count
}

const find_2 = n => {
  let count = 0
  for (let i = 5; i <= n; i += 5) {
    let num = i
    while (num % 5 === 0) {
      num /= 5
      count += 1
    }
  }
  return count
}

console.log(factorial(2) === 1 * 2);
console.log(factorial(3) === 1 * 2 * 3);
console.log(factorial(6) === 1 * 2 * 3 * 4 * 5 * 6);
console.log('---');
console.log(find_1(8) === 1);
console.log(find_1(9) === 1);
console.log(find_1(10) === 2);
console.log('---');
console.log(find_2(8) === 1);
console.log(find_2(9) === 1);
console.log(find_2(10) === 2);
