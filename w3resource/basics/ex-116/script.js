const find = s => {
  const result = []
  for (let i = 0; i < 10; i++) {
    result.push(s.replace(/[#]/, i))
  }
  return result.filter(s => Number(s) % 3 === 0)
}

console.log(find('2#0').length === 3);
console.log(find('2#0'));
console.log(find('4#2').length === 4);
console.log(find('4#2'));
console.log(find('#22').length === 3);
console.log(find('#22'));
console.log(find('12#').length === 4);
console.log(find('12#'));
console.log(find('12#45').length === 4);
console.log(find('12#45'));
