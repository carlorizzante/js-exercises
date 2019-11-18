const handleString = (a, b) => {
  const trim = Math.min(a.length, b.length)
  return a.slice(-trim) + b.slice(-trim)
}

console.log(handleString('Python', 'JS') === 'onJS');
console.log(handleString('Python', 'JS'));
