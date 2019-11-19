const nor = (a, b) => !a && !b

console.log(nor(true, false) === false);
console.log(nor(false, false) === true);
console.log(nor(true, true) === false);
console.log(nor(false, true) === false);
