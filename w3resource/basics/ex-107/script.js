const find = arr => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] % arr[i] === 0) {
        count += 1
      }
    }
  }
  return count
}


console.log(find([1,2,3]) === 2);
console.log(find([2,4,6]) === 2);
console.log(find([2,4,16]) === 3);
