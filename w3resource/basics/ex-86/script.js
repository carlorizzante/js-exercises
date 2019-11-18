const angleType = angle => {
  if (angle === 180) return 'straight'
  if (angle > 90) return 'obtuse'
  if (angle === 90) return 'right'
  return 'acute'
}

console.log(angleType(45) === 'acute');
console.log(angleType(90) === 'right');
console.log(angleType(135) === 'obtuse');
console.log(angleType(180) === 'straight');
