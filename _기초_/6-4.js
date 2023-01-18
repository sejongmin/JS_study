function isAdult(user){
    if(!('age' in user) || user.age < 20){
        return false;
    }else{
        return true;
    }
}

const Mike = {
    name : "Mike",
    age : 30,
}

const Jane = {
    name : "Jane",
}

console.log(isAdult(Mike));
console.log(isAdult(Jane));