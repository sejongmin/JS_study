const id = Symbol("id");
const id1 = Symbol.for("id");
const id2 = Symbol.for("id");
//전역심볼은 키를 통해 같은 Symbol을 공유

console.log(id1 === id2);
console.log(Symbol.keyFor(id1))
//전역심볼이 아니면 키를 알려주지 않음

console.log(id.description);
//전역심볼이 아닌 심볼의 키를 알려줌