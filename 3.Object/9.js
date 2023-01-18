const arr = [
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"],
];

let user = Object.fromEntries(arr);
//키/값 배열을 객체로

console.log(user);