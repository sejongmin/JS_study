const user = {
    name : "Mike",
    age : 30,
}

newUser = Object.assign({gender : "male", name : "Tom"}, user);
//새로운 키는 생성되고, 같은 키는 덮어씀

console.log(newUser);