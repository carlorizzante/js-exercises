const find = (arr, k) => arr.sort((a, b) => b - a)[k - 1]

console.log(find([1,2,3,4,5,6], 3) === 4);
console.log(find([10,21,13,45,15,66], 2) === 45);
