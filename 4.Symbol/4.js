const id = Symbol("id");

const user = {
    name : "Mike",
    age : 30,
    [id] : "myid",
}

console.log(Object.getOwnPropertySymbols(user));
//심볼들만 볼 수 있음
console.log(Reflect.ownKeys(user));
//심볼을 포함한 모든 키를 보여줌