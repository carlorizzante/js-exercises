const doubleSum = arr =>
  arr.reduce((result, val, index) => {
    result[index % 2] += val
    return result
  }, [0,0])

console.log(doubleSum([1,2,3,4,5,6]), [9,12]);
