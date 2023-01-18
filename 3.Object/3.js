const user = {  //user에는 객체의 메모리 주소가 저장됨
    name : "Mike",
    age : 30,
}

//const cloneUser = user; (하나의 객체를 두 변수가 접근)

const newUser = Object.assign({}, user);    //{}은 초기값 {} + user가 됨

newUser.name = "Tom";

console.log(user.name);
console.log(newUser.name);