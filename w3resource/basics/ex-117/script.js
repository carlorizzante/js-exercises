const validate = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (
        (i === j && matrix[i][j] !== 1) ||
        (i !== j && !!matrix[i][j])
      ) return false
    }
  }
  return true
}

console.log(validate([[1,0,0],[0,1,0],[0,0,1]]) === true);
console.log(validate([[1,0,0],[1,1,0],[0,0,1]]) === false);
