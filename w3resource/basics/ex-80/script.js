const swap = arr => arr.length
  ? arr.length === 1
    ? arr
    : [...arr.slice(-1), ...arr.slice(1, -2), arr[0]]
  : false

const swap_2 = arr => {
  if (!arr.length) return false
  else [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
  return arr
}

console.log(swap([]));
console.log(swap([1]));
console.log(swap([1,2]));
console.log(swap([1,2,3,4,5]));
console.log('--');
console.log(swap_2([]));
console.log(swap_2([1]));
console.log(swap_2([1,2]));
console.log(swap_2([1,2,3,4,5]));
