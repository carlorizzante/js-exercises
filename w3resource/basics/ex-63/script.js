const handleString = s => s.length % 2 === 0
  ? false
  : s.slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 2)

console.log(handleString('abcdef') === false);
console.log(handleString('abcdefg') === 'cde');
console.log(handleString('abcdefg'));
console.log(handleString('abcdefghi') === 'def');
console.log(handleString('abcdefghi'));
