const find = (list, n) => {
  if (!list.length) return -1
  const middle = Math.floor(list.length / 2)
  if (list[middle] === n) return n
  else if (n < list[middle]) return find(list.slice(0,middle), n)
  else return find(list.slice(middle + 1), n)
}

console.log(find([0,1,2,3,4,5,6,7,8,9], 2) === 2);
console.log(find([11,22,33,44,55,66,77,88,99], 88) === 88);
console.log(find([11,22,33,44,55,66,77,88,99,110], 88) === 88);
console.log(find([11,22,33,44,55,66,77,88,99], 56) === -1);
console.log(find([11,22,33,44,55,66,77,88], 56) === -1);
