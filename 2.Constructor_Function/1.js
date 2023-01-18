function User(name, age){
    //this = {}

    this.name = name;
    this.age = age;

    //return this;
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);

console.log(user1);
console.log(user2);
console.log(user3);

//생성자 함수는 첫글자를 대문자로