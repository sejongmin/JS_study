let margin = "10px";

parseInt(margin);   //10
Number(margin)  //NaN
//parseInt는 읽을 수 있는 곳까지는 숫자로 변환

let redColor = "f3";
parseInt(redColor); //NaN
parseInt(redColor, 16)  //243
parseInt('11', 2)   //3
//parseInt는 다른 진수로 변환 가능