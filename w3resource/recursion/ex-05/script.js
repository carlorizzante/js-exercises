const find = (n, exp) => {
  if (exp < 2) return n
  else return n * find(n, exp - 1)
}

console.log(find(3,2) === 3*3);
console.log(find(2,3) === 2*2*2);
console.log(find(7,4) === 7*7*7*7);
