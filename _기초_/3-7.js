const gender = "F";
const name = "Jane";
const isAdult = true;

if (gender === "M" && name === "Mike" || isAdult){
    console.log("통과");
}else{
    console.log("돌아가.")
}
// || 가 &&보다 우선순위가 높아서 통과함
