const handleString = s => s.substring(0, 4).toLowerCase() === 'java'

console.log(handleString('Javascript') === true);
console.log(handleString('Java') === true);
console.log(handleString('Python') === false);
