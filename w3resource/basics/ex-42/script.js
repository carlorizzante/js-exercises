const validate = (a, ...rest) =>
  [...rest].reduce((prev, current, index) => (prev || prev === 0) && prev < current && current, a)
    ? 'strict mode'
    : a < [...rest][[...rest].length - 1]
      ? 'soft mode'
      : false

console.log(validate(1,2,3,4) === 'strict mode');
console.log(validate(1,3,2,4) === 'soft mode');
console.log(validate(2,3,4,1) === false);
console.log(validate(0,1,2,3,4) === 'strict mode');
console.log(validate(4,0,2,3,1) === false);
