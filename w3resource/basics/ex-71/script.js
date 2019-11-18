const check = arr => arr.length >= 1
  ? arr[0] === 1 || arr[arr.length - 1] === 1
  : false

console.log(check([1,2,3]) === true);
console.log(check([2,3,1]) === true);
console.log(check([2,3,7]) === false);
console.log(check([]) === false);
