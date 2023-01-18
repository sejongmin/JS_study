function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
        //호출했을때 this는 user와 같음
    }
}

let user = new User("Han", 40);

user.sayName();