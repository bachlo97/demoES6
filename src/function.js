/* 
* declare function: có cơ chế hoisting
* arrow function: không có cơ chế hoisting
*/
function print_1(){

}
var print_2 = function() {}

// -- Arrow function --
const print_3 = () => {
    console.log("cyber")
}
print_3()

const total = (a,b) => {return a+b}
// -Rút gon -
const total1 = (a,b) => a + b;

const number = (message = "Yêu cầu nhập vào số.") =>message;
number();
number("cyber");

// ------
// rest params: không quan tâm người dùng truyền vào bao nhiêu tham số
const calc = (a,b,...rest) => {
    console.log("a",a) //1
    console.log("b",b) // 2
    console.log("rest",rest) //[3,4,5,6,7,8,9,10,11]
    let rs = 0;
    console.log(rest) // array
    rest.forEach((num) => rs += num )
}
calc(1,2,3,4,5,6,7,8,9,10,11);
calc(1,2) //result: 1 , 2 , []
// const calc = (a,b,c,d,e,f) => a + b + c + d + e + f;