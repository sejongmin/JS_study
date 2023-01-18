let showError = () => {
    console.log("error");
}
showError();

const sayHello = (name = "friend") => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello();

const add = (num1, num2) => num1 + num2;

console.log(add(1, 2))