let boy = {
    name : "Mike",
    showName: function (){
        console.log(this.name);
    }
};

let man = boy;
man.name = "Tom";

console.log(boy.name);