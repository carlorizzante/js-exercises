const fn = (arr, old_value, new_value) =>
  arr.map(val => val === old_value ? new_value : val)

console.log(fn([1,2,3,3,4,2,5,1,2,7], 2, 9));
