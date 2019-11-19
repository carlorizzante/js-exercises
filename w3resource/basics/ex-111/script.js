const find = (a,b,c) => {
  if (a !== b && b !== c && c !== a) return false
  if (a === b && b === c && c === a) return false
  if (a === b) return c
  if (b === c) return a
  return b
}

console.log(find(1,2,2) === 1);
console.log(find(1,1,2) === 2);
console.log(find(1,1,1) === false);
console.log(find(1,2,3) === false);
