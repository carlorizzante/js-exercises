const find = arr => {
  const sorted = arr.sort((a, b) => b - a)
  return sorted[0] - sorted.slice(-1)
}

console.log(find([1,2,6,4,5]) === 6-1);
console.log(find([1,5,6,4,9]) === 9-1);
console.log(find([10,51,61,4,54]) === 61-4);
console.log('---');
console.log(find([1, 2, 3, 8, 9]) === 8);
console.log(find([1, 2, 3, 18, 9]) === 17);
console.log(find([13, 2, 3, 8, 9]) === 11);
