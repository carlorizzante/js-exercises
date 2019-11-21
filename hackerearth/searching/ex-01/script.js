const findFirst = (list, n) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === n) return i
  }
  return -1
}

const findLast = (list, n) => {
  let last = -1
  for (let i = 0; i < list.length; i++) {
    if (list[i] === n) last = i
  }
  return last
}

console.log(findFirst([0,1,2,3,4,5,6,7,8,9], 8) === 8);
console.log(findFirst([0,1,2,3,4,5,6,7,9,10], 8) === -1);
console.log(findLast([10,12,34,21,65,89,64,23,67,98,23,11], 23) === 10);
console.log(findLast([10,12,34,21,65,89,64,23,67,98,23,11], 22) === -1);
