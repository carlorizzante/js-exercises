const rotateLeft = ([n, ...rest]) => [...rest, n]

console.log(rotateLeft([1,2,3]));
console.log(rotateLeft([7,8,9,10]));
