//let const ES6부터 생김 이전엔 var
//var은 한번 선언된 변수를 다시 선언할 수 있다.
//호이스팅(hoisting) var을 사용하면 맨처음 선언한 것 처럼 동작 (할당X)
//함수스코프 var, 블록스코프 let, const

/*
    1.선언단계
    2.초기화 단계
    3.할당단계
*/

var name = "Mike";
console.log(name);

var name = "Jane";
console.log(name);

