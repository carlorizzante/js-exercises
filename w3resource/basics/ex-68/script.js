const handleString = (s, n) => s.length >= n
  ? s.slice(0, n) + s.slice(-n)
  : false

console.log(handleString('abcdef', 2) === 'abef');
console.log(handleString('abcdef', 2));
console.log(handleString('ab', 3) === false);
