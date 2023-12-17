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
// const stu_1 = listStudent[0];
// const stu_2 = listStudent[1];
// const stu_3 = listStudent[2];

// -- desstructuring --
// const [stu_1,stu_2,stu_3] = listStudent;
const [stu_1,,stu_3] = listStudent;

// const age = stu1.age;
// const name = stu1.name;
// const address = stu1.addr;

// bốc tách thuộc tính và tạo biến có tên giống với thuộc tính của đối tượng
//? tên thuộc tính muốn bốc tách: tên biến muốn tạo ra.
//? -- adrr                     : address
const {age,addr:Laddress} = stu1;
