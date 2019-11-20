const find = ([n, ...rest]) => {
  if (!rest.length) return n
  else return n + find(rest)
}

console.log(find([1,2,3]) === 6);
console.log(find([1,2,3,4,5,6,7,8,9,10]) === 55);
