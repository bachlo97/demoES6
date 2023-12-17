//* 1. For of: lặp qua phần tử của mảng(array)
const listStudent = [
    {
        age: 20,
        name: "Nguyen Van A"
    },

    {
        age: 20,
        name: "Nguyen Van B"
    },
    {
        age: 22,
        name: "Nguyen Van C"
    }
];

//? Mỗi lần lặp qua phần tử của listStudent thì chúng ta sẽ tạo một biến student và lưu trữ giá trị của phần tử đó
//? Không biết được vị trí index của student
for(const student of listStudent){
    console.log(student);
}

//* 2. For in(array,object): lấy key. Sử dụng cho object
const [, , stu3] = listStudent  //destructuring
for(const key in stu3){
    console.log(key)
}

