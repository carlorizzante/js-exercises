const validate = s => s
  .replace(/[^pt]/g, '')
  .split('')
  .reduce((count, char) => char === 'p'
    ? count += 1
    : count -= 1
  , 0) === 0

console.log(validate('pinocchio') === false)
console.log(validate('pp:tt:qqq') === true)
console.log(validate('pp:ttt:qqq:p') === true)
console.log(validate('pino tremulo') === true)
console.log(validate('pino tutto') === false)
