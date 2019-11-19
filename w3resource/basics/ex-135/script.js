const handleString = s => {
  const chars = s.split('')
  const memo = {}
  chars.forEach(c => memo[c] ? memo[c] += 1 : memo[c] = 1)
  return chars.filter(c => memo[c] <= 1).join('')
}

console.log(handleString('abcdabc') === 'd');
console.log(handleString('abcabc') === '');
console.log(handleString('python') === 'python');
console.log(handleString('javascript') === 'jvscript');
console.log(handleString('1365451') === '364');
