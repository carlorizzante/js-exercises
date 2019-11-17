const replicate = (s, n) => {
  let result = ''
  while (n) {
    result += s
    n -= 1
  }
  return result
}

const replicate_2 = (s, t) => t === 0
  ? ''
  : s.repeat(t)

console.log(replicate('abc', 0) === '');
console.log(replicate('abc', 1) === 'abc');
console.log(replicate('abc', 3) === 'abcabcabc');
console.log('---');
console.log(replicate_2('abc', 0) === '');
console.log(replicate_2('abc', 1) === 'abc');
console.log(replicate_2('abc', 3) === 'abcabcabc');
