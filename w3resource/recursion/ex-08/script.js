const find = (list, n) => {
  const middle = Math.floor(list.length / 2)
  if (list[middle] === n) return n
  else if (n < list[middle]) return find(list.slice(0, middle), n)
  else return find(list.slice(middle + 1), n)
}

console.log(find([0,1,2,3,4,5,6,7,8], 5) === 5);
console.log(find([2,4,6,8,10,12,14,16], 4) === 4);
