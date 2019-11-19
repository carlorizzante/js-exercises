const find = s => s
  .split('')
  .reduce((count, c) => !!Number(c) ? count + Number(c) : count, 0)

console.log(find('j4v4scr1pt') === 9);
console.log(find('H3llo') === 3);
