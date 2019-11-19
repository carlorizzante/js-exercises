const sort = arr => arr
  .sort((a, b) => a.length - b.length)

console.log(sort(['aa', 'a', 'aaa'])); // ['a', 'aa', 'aaa']
console.log(sort(["xyz","acd","aa","bb","zzz","", "a","b"])); // ["","a","b","aa","bb","xyz","acd","zzz"]
