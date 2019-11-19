const fn = s => s.replace(/[0-9]/, '$')

console.log(fn('p1thon') === 'p$thon');
console.log(fn('p1th0n') === 'p$th0n');
