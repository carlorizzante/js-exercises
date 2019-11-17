const handleString = s => s.substring(4, 10).toLowerCase() === 'script'
  ? s.substring(0, 4) + s.substring(10)
  : s

console.log(handleString('Javascript') === 'Java');
console.log(handleString('Coffeescript') === 'Coffeescript');
console.log(handleString('Javascriptjava') === 'Javajava');
