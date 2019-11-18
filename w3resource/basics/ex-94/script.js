const find = arr => {
  const data = arr.reduce((memo, val) => ({
    ...memo,
    [val]: memo[val] ? memo[val] += 1 : 1
  }), {})
  const result = Object.keys(data)
    .map(key => ({
      key,
      count: data[key]
    }))
    .sort((a, b) => b.count - a.count)
  return Number(result[0].key)
}


console.log(find([1,2,3,2,4,5,1,6,2]) === 2);
console.log(find([1,2,3,2,4,5,1,6,2]));
