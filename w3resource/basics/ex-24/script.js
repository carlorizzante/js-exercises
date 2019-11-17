const handleString = s =>
  s.charAt(0) + s + s.charAt(0)

console.log(handleString('a') === 'aaa');
console.log(handleString('ab') === 'aaba');
console.log(handleString('abc') === 'aabca');
