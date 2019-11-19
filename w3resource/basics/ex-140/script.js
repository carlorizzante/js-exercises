const validate = ([a, ...rest]) => [...rest]
	.reduce((check, n) => check && n === a, true)

console.log(validate([1,1,1]) === true)
console.log(validate([3,3,3,3,3]) === true)
console.log(validate([3,3,3,1,3]) === false)
