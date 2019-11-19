const validate = (x, y, cx, cy, cr) => {
  const distance_from_center = (x - cx)**2 + (y - cy)**2
  return distance_from_center <= cr**2
}

console.log(validate(0,0,2,4,6) === true);
console.log(validate(0,0,6,8,6) === false);
console.log(validate(2,3,2,4,6) === true);
