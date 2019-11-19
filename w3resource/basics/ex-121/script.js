const validate = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 1; j < matrix.length; j++) {
      if (i < j && matrix[i][j]) return false
    }
  }
  return true
}

console.log(validate([[1, 0, 0],[2, 0, 0], [0, 3, 3]]) == true);
console.log(validate([[1, 0, 1],[2, 0, 0], [0, 3, 3]]) == false);
