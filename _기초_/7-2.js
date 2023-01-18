let boy = {
    name : "Mike",
    sayThis:() => {
        console.log(this);
    }
};

boy.sayThis();