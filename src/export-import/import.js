//* Import- export giúp chúng ta xác định được nơi mà chúng ta sử dụng function hoặc biến
//* 2. Chỉ import 1 file js duy nhất vào file html
// Muốn sử dụng những thứ đc export dưới dạng name ở file export.js
// {}: import dưới dạng name
import {calcSum} from "./export-name.js"

console.log(calcSum(3,4))

// 2.Import dưới dạng default thì không cần dấu {}
//? có thể đổi qua 1 tên khác
//? Có thể import default và  name trên cùng 1 hàng
//? Để đổi tên của export name thì chúng ta thêm as phía sau biến hay function cần đổi tên và đưa tên chúng ta muốn đổi vào(Nếu đã đổi tên rồi thì không thể sử dụng tên đó được nữa)
import PIfromDefault,{NAME as name} from "./export-default.js"

console.log({PIfromDefault,name})
