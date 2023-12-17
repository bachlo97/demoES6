// == [ES5] ==
// Cách tạo lớp đối tượng
function Student(name, age) {
  this.name = name;
  this.age = age;

  // Cách này sẽ gây tốn bộ nhớ vì mỗi lần tạo đối tượng thì printInfo method sẽ sẽ được tạo ra ở nhiều địa chỉ
  // this.printInfo = () => {
  //   console.log("Name is ", this.name);
  // };
}

//cách mà chúng ta chia sẻ method giữa các đối tượng khác nhau, mà cùng 1 địa chỉ method(để tiết kiệm bộ nhớ

// Không sử dụng arrow function: vì nó sẽ không có ngữ cảnh this riêng
Student.prototype.printInfo = function () {
  console.log("Name is", this.name);
};
const student1 = new Student("Nguyen Van A", 20);
const student2 = new Student("Nguyen Van B", 22);

student1.printInfo();
student2.printInfo();

console.log({
  student1,
  student2,
});

console.log(student1.printInfo === student2.printInfo);

//* hasOwnProperty: method này ở đâu ra ???? Do nó được kế thừa từ Object
console.log(student1.hasOwnProperty("addr"));
//! ✅ prototype chain

//? == [ES6] ==: class
class Product {
  //Hàm khởi tạo(khởi tạo các thuộc tính của đối tượng
  constructor(name, price) {
    this.name = "";
    this.price = "";
  }

  //Method
  showInfo() {
    console.log("Name is ", this.name);
    console.log("Price is ", this.price);
  }
}
const prod1 = new Product("Iphone 15", 1000); //Gọi và truyền tham số cho hàm constructor
const prod2 = new Product("Iphone 16", 2000);
prod1.showInfo();
prod2.showInfo();
console.log(prod1.showInfo === prod2.showInfo);
console.log({ prod1, prod2 });

//? -- Inheritance(kế thừa) --
/**
 * con cái sẽ được kế thừa gen của ba mẹ.
 */

// Lớp đối tương cha.
class ChuyenXe {
  constructor(soXe, hoTenTaiXe, maSoChuyen, doanhThu) {
    this.soXe = soXe;
    this.hoTenTaiXe = hoTenTaiXe;
    this.maSoChuyen = maSoChuyen;
    this.doanhThu = doanhThu;
  }
  run(){
    console.log('Chuyến xe đang chạy')
  }
}

class ChuyenXeNoiThanh extends ChuyenXe {
  constructor(soTuyen, soKmDiDuoc, soXe, hoTenTaiXe, maSoChuyen, doanhThu) {
    // Phải gọi hàm super trước khi sử dụng this để truy cập các giá trị thuộc tính, gán giá trị.
    // super: chính là lớp cha (ChuyenXe).
    // super(): gọi hàm khởi tạo của lớp đối tượng kế thừa
    super(soXe, hoTenTaiXe, maSoChuyen, doanhThu); // ChuyenXe()

    this.soTuyen = soTuyen;
    this.soKmDiDuoc = soKmDiDuoc;
  }
  run(){
    super.run();
    console.log('Chuyến xe nội thành đang chạy');
  }
}

class ChuyenXeNgoaiThanh extends ChuyenXe {
  // rest parameter
  constructor(noiDen, soNgayDiDuoc, ...rest) {
    // rest: array
    console.log(rest);
    // spread operator
    super(...rest); 
    this.noiDen = noiDen;
    this.soNgayDiDuoc = soNgayDiDuoc;
  }
}

// soXe, hoTenTaiXe, maSoChuyen, doanhThu
const cxnt = new ChuyenXeNoiThanh(
  "QN-DN",
  "100Km",
  "123456",
  "Nguyen Van A",
  "111",
  "1_000_000"
);
const ngoaiThanh = new ChuyenXeNgoaiThanh(
  "Sai Gon",
  "10",
  "123456",
  "Nguyen Van A",
  "111",
  "1_000_000"
);
console.log(cxnt);
console.log(ngoaiThanh);
cxnt.run()
