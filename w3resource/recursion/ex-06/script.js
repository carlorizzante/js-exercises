const fib = n => {
  if (n === 1) return [0, 1]
  const list = fib(n - 1)
  list.push(list[n - 1] + list[n - 2])
  return list
}

console.log(fib(8)); // [0,1,1,2,3,5,8,13]
console.log(fib(10)); // [0,1,1,2,3,5,8,13,21,34]
// console.log(fib(10000)); // [0,1,1,2,3,5,8,13,21,34]
