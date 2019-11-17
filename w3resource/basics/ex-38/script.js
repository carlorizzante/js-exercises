const evaluateStudent = (totmarks, isFinal) => isFinal
  ? totmarks >= 90
  : totmarks >= 89 && totmarks <= 100

console.log(evaluateStudent(78) === false);
console.log(evaluateStudent(89, true) === false);
console.log(evaluateStudent(99, true) === true);
