const check = arr => arr.length >= 1
  ? arr[0] === arr[arr.length - 1]
  : false

console.log(check([1,2,3,1]) === true);
console.log(check([2,3,2]) === true);
console.log(check([7,2,1,3,3,7]) === true);
console.log(check([]) === false);
