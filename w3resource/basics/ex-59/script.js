const handleString = s => s.length % 2 === 0
  ? s.substring(0, s.length / 2)
  : s

console.log(handleString('Javascript') === 'Javas');
console.log(handleString('abc') === 'abc');
