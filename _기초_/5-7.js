function showError(){
    console.log("에러가 발생했습니다.");
    return;
    console.log("이 코드는 절대 실행되지 않습니다.");
}

const result = showError();
console.log(result);