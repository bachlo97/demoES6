const name = "Mị";
const age = 20;
// const obj = {
//     name: name,
//     age: age,
// };

// Nếu tên thuộc tính và tên biến trùng nhau thì có thể rút gọn
const obj = {
  name,
  age,
};

// -- Tên thuộc tính được truyền thông qua biến.
const thuocTinh = "dayLaThuocTinhDong";
const stu = {
  addr: "Da Nang",
  [thuocTinh]: true,
};
console.log(stu);

