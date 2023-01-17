let user = {
    name: 'Jane',
    age: 18,
    gender: 'female'
};

let {name, age, gender = 'male'} = user;

console.log(gender);