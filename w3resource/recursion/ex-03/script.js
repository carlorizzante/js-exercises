const find = (a, b) => {
  const aux = (a, b, list) => {
    if (a + 1 === b) return list
    else return aux(a + 1, b, [...list, a + 1])
  }
  return aux(a, b, [])
}

const find_2 = (a, b) => {
  if (a + 1 === b) {
    return []
  } else {
    return [a + 1, ...find_2(a + 1, b)]
  }
}

const find_3 = (a, b) => {
  if (a + 1 === b) {
    return []
  } else {
    const list = find_3(a + 1, b)
    list.unshift(a + 1)
    return list
  }
}

console.log(find(2,9)); // [3,4,5,6,7,8]
console.log(find_2(2,9)); // [3,4,5,6,7,8]
console.log(find_3(2,9)); // [3,4,5,6,7,8]
