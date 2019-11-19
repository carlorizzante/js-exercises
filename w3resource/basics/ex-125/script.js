const find = arr => arr.sort((a, b) => b.length - a.length)[0]

console.log(find(['a', 'ab', 'abc']) === 'abc');
console.log(find(['abcd', 'ab', 'abc']) === 'abcd');
