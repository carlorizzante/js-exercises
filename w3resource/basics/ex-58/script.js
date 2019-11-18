const handleString = s => s.length >= 3
  ? s.substring(s.length - 3).repeat(4)
  : false

console.log(handleString('ab') === false);
console.log(handleString('Javascript') === 'iptiptiptipt');
console.log(handleString('Javascript'));
