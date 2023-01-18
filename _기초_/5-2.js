function sayHello(name){
    let msg = 'Hello';
    if (name){
        msg += ', ' + name;
    }
    console.log(msg);
}
sayHello();
sayHello("Tom");
sayHello("Mike");
sayHello("Jane");