let days = ["mon", "tue", "wed"];

days.push("tus");
days.unshift("sun");

for(let index = 0; index<days.length; index++){
    console.log(days[index]);
}

for(let day of days){
    console.log(day)
}