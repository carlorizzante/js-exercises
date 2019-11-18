const handleString = s => s.length >= 6
  ? s.slice(-6).toLowerCase() === 'script'
  : false

console.log(handleString('Python') === false);
console.log(handleString('abcdefghi') === false);
console.log(handleString('Javascript') === true);
console.log(handleString('JavaScript') === true);
