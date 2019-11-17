const first_last = s =>
  s.charAt(s.length - 1) +
  s.substring(1, s.length - 1) +
  s.charAt(0)

console.log(first_last('a') === 'a');
console.log(first_last('ab') === 'ba');
console.log(first_last('abc') === 'cba');
console.log(first_last('abc'));
console.log(first_last('pinocchio') === 'oinocchip');
console.log(first_last('pinocchio'));
