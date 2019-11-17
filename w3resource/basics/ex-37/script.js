const handleString = s => s.length < 3
  ? s.toUpperCase()
  : s.substring(0, 3).toLowerCase() + s.substring(3)

console.log(handleString("Python") === 'python');
console.log(handleString("Py") === 'PY');
console.log(handleString("JAVAScript") === 'javAScript');

console.log(handleString("Python"));
console.log(handleString("Py"));
console.log(handleString("JAVAScript"));
