const find = (arr1, arr2) => {
	let count = 0
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) count += 1
		}
	}
	return count
}

console.log(find([1,2,3,4], [1,2,3,4]) === 4);
console.log(find([1,2,3,4], [1,2,3,5]) === 3);
console.log(find([1,2,7,4], [1,2,3,4]) === 3);
console.log(find([1,2,7,4], [11,22,33,44]) === 0);
