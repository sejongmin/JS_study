const user = {
    name : "Mike",
}
const info1 = {
    age : 30,
}
const info2 = {
    gender : "male",
}

Object.assign(user, info1, info2);
//user에 info1, info2 가 합쳐짐

console.log(user);