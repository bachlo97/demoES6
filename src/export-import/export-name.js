//file sẽ tạo các function để xử lý các tác vụ nhỏ

/* 
*export: để chia sẻ cho các file js khác được sử dụng:
* có 2 loại export: name và default
*/

// -- cách 2: name: điền trực tiếp
export function calcSum(a,b){
    return a+b;
}

// // --Cách 2: name: điền ở dưới cùng của file
// function calcSum(a,b){
//     return a + b;
// }
// export {calcSum}