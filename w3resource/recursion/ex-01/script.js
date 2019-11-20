const find = n => {
  if (n === 1) return n
  else return n * find(n - 1)
}

console.log(find(1) === 1);
console.log(find(2) === 2);
console.log(find(3) === 6);
console.log(find(4) === 24);
console.log(find(5) === 120);
