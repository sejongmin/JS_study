const user = {
    name : "Mike",
    age : 30,
};

const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);
};

user[showName]();

for(let key in user){
    console.log(`His ${key} is ${user[key]}.`);
}