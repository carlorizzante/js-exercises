const vowels = ['a', 'e', 'i', 'o', 'u']

const countVowels_1 = s => s
  .split('')
  .map(char => char.toLowerCase())
  .reduce((count, char) => vowels.includes(char)
    ? count += 1
    : count
  , 0)

const countVowels_2 = s => s.replace(/[^aeiou]/g, '').length

console.log((countVowels_1('Python') === 1));
console.log((countVowels_1('Javascript') === 3));
console.log('--');
console.log((countVowels_2('Python') === 1));
console.log((countVowels_2('Javascript') === 3));
