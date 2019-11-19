const isPalindrome = s => {
  let check = true
  let middle = Math.floor(s.length / 2)
  for (let i = 0; i < middle; i++) {
    if (check && s[i] !== s[s.length - (i + 1)]) return false
  }
  return check
}

const fn = s => {
  let suffix = ''
  for (let i = 0; i < s.length; i++) {
    suffix = s.slice(0, i).split('').reverse().join('')
    const check = s + suffix
    if (isPalindrome(check)) return check
  }
  return false
}

console.log(isPalindrome('aba') === true);
console.log(isPalindrome('abba') === true);
console.log(isPalindrome('abca') === false);
console.log('---');
console.log(fn('abcddc') === 'abcddcba');
// console.log(fn('abcddc'));
console.log(fn('abb') === 'abba');
// console.log(fn('abb'));
console.log(fn('122') === '1221');
// console.log(fn('122'));
console.log(fn('1234567') === '1234567654321');
// console.log(fn('1234567'));
