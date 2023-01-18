function item(title, price){
    //this = {}

    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price} 입니다.`);
    }

    //return this
}

const item1 = new item("인형", 3000);
const item2 = new item("가방", 4000);
const item3 = new item("지갑", 9000);

console.log(item1, item2, item3);

item3.showPrice();