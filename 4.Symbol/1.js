const a = Symbol()  //new를 붙이지 않음
const b = Symbol()

console.log(a, b);
console.log(a === b, a == b);
//심볼은 유일성을 보장함