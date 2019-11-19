const round = n => {
  while (n % 10) n += 1
  return n
}

console.log(round(56) === 60);
console.log(round(592) === 600);
