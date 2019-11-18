// const handleString = s => s.substring(s.length - 3) + s.substring(0, s.length - 3)
const handleString = s => s.slice(-3) + s.slice(0, -3)

console.log(handleString('Netflix') === 'lixNetf');
console.log(handleString('Netflix'));
