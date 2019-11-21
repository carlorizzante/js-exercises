const validate_1 = ([a, ...rest]) => [...rest]
	.reduce((check, n) => check && n === a, true)

const validate_2 = list =>
	list.every((value, index, arr) => index === arr.length - 1 ? true : arr[index + 1] === value)

const validate_3 = ([a, ...rest]) => ![...rest].some(val => val !== a)

const validate_4 = list => {
	for (let i = 0; i < list.length - 2; i++) {
		if (list[i] !== list[i + 2]) return false
	}
	return true
}

console.log(validate_1([1,1,1]) === true)
console.log(validate_1([3,3,3,3,3]) === true)
console.log(validate_1([3,3,3,1,3]) === false)
console.log('---');
console.log(validate_2([1,1,1]) === true)
console.log(validate_2([3,3,3,3,3]) === true)
console.log(validate_2([3,3,3,1,3]) === false)
console.log('---');
console.log(validate_3([1,1,1]) === true)
console.log(validate_3([3,3,3,3,3]) === true)
console.log(validate_3([3,3,3,1,3]) === false)
console.log('---');
console.log(validate_4([1,1,1]) === true)
console.log(validate_4([3,3,3,3,3]) === true)
console.log(validate_4([3,3,3,1,3]) === false)
