const find = arr => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count += 1
    }
  }
  return count
}



console.log(find([0,3,2,5,9]) === 1);
console.log(find([1,5,4,3]) === 3);
console.log(find([10,30,20,-10]) === 4);
