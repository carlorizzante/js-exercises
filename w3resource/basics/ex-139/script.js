const find = arr => {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] % 10 === 0) return i
	}
	return 0
}

console.log(find([1,22,30,54,56,72]) === 2);
console.log(find([1,22,31,54,50,72]) === 4);
console.log(find([1,22,31,54,51,72]) === 0);
