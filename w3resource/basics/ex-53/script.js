const validate = s => {
  let last
  let result = false
  for (let i = 0; i < s.length; i++) {
    const current = s.charAt(i).toLowerCase()
    if (current === 'a' || current === 'b') {
      if (i - last >= 3) result = true
      last = i
    }
  }
  return result
}

console.log(validate('Chainsbreak') == true);
console.log(validate('Javascript') == false);
console.log(validate('::a:a:b:::a') == true);
