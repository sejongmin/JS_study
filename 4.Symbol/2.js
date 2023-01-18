const id = Symbol("id");

const user = {
    name : "Mike",
    age : 30,
    [id] : "myid",
}

console.log(user);
console.log(Object.keys(user));
//키가 심볼인 객체는 건너뜀