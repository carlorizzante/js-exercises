const handleString = s => {
  const prefix = s.slice(0, 3).toLowerCase()
  return prefix === 'los' || prefix === 'new'
    ? s : ''
}

console.log(handleString('Austin') === '');
console.log(handleString('Los Angeles') === 'Los Angeles');
console.log(handleString('New York') === 'New York');
