const makeTime = num => {
  const hours = Math.floor(num / 60)
  const minutes = num % 60
  return `${hours}:${minutes}`
}

console.log(makeTime(71));
console.log(makeTime(450));
console.log(makeTime(1441));
