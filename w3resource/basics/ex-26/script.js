const handleString = s => s.length >= 3
  ? s.substring(s.length - 3) + s + s.substring(s.length - 3)
  : false

console.log(handleString('abc') === 'abcabcabc');
console.log(handleString('abc') === 'abcabcabc');
console.log(handleString('abcd') === 'bcdabcdbcd');
