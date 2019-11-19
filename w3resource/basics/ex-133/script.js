const validate = fr => Math.abs(fr[0] / fr[1]) < 1

console.log(validate([12,300]) === true);
console.log(validate([2,4]) === true);
console.log(validate([103,3]) === false);
console.log(validate([104,2]) === false);
console.log(validate([5,40]) === true);
