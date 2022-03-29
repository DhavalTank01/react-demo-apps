function add(a1, b1) {
  let a = a1;
  let b = b1;
  return a + b;
}
function sub(a2, b2) {
  let a = a2;
  let b = b2;
  return a - b;
}
function div(a3, b3) {
  let a = a3;
  let b = b3;
  return (a / b).toFixed(2);
}
function mul(a4, b4) {
  let a = a4;
  let b = b4;
  return a * b;
}


export { add, sub, mul, div };
