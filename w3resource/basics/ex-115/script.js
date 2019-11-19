const validate = matrix => {
  let left = true
  let right = true
  for (let i = 0; i < matrix.length; i++) {
    const k = matrix.length - i - 1
    for (let j = 0; j < matrix.length; j++) {
      if (i !== j && matrix[i][j] !== 0) left = false
      if (i !== j && matrix[k][j] !== 0) right = false
    }
  }
  return left || right
}

console.log(validate([[1,0,0], [0,2,0], [0,0,3]]) === true);
console.log(validate([[0,0,1], [0,2,0], [3,0,0]]) === true);
console.log(validate([[1,0,0], [0,2,3], [0,0,3]]) === false);
console.log(validate([[0,0,1], [3,2,0], [3,0,0]]) === false);
