const handleString = s => s.replace(/^P|P$/g, '')

console.log(handleString('Javascript') === 'Javascript');
console.log(handleString('Python') === 'ython');
console.log(handleString('ythonP') === 'ython');
console.log(handleString('PythonP') === 'ython');
console.log(handleString('PythonP'));
