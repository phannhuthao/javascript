// var Name = ["H", "K", "T", "N", "O"];

// console.log("Phần tử trong mảng name: ", Name);

// Name[4] = "M";

// let a = 100;
// a = 20;
// console.log("Sô a có giá trị là: ", a);

// let n = Number(prompt("Nhập một nguyên dương: "));
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     if ( n > 0 ) {
//         n = n + 1;
//     }
//     console.log(n);
// }


// const phone = [1, 2, 3, 4, 5];
// phone.push(6);
// phone.splice(2,0, '9');
// console.log("Phần tử của ", phone, "là:");

// var chuoikitu = prompt("Nhập chuỗi kí tự bạn muốn nhập vào: ");
// var kitunhap = demSoKyTuKhongKhoangTrang(chuoikitu);

// function demSoKyTuKhongKhoangTrang(chuoikitu) {
//     let soKyTu = 0;
//     for (let i = 0; i < chuoikitu.length; i++) {
//         if (chuoikitu[i] !== ' ') {
//             soKyTu++;
//         }
//     }
//     return soKyTu;
// }
// console.log("Số ký tự trong chuỗi (không tính khoảng trắng) là: ", kitunhap);


// const arr = [1,2,3,4,5,6,7,8,9,10]
// const res = arr1.map(num => num*2)
// console.log("arr sau khi double: ", res);

// Đảo ngược theo chữ cái đầu , số đầu: sort
// const arr1 = [1, 3 ,4 ,41, 12]
// arr1.sort()
// console.log("arr1 sau khi sort: ", arr1);


// const lop = {};
// const thanhvien = "Dat";
// const thanhvien2 = "An";

// Object.assign(lop, thanhvien, thanhvien2);
// console.log(lop);

// const person =  {
//     firstName: "Duc", 
//     lastName: "Duy",
//     set fullname(name) {
//         const part = name.split(" ");
//         this.firstName = part[0];
//         this.lastName = part[1];
//     } 
// };
// person.fullname = "Duc Duy";
// console.log(person.fullname);

const Product = [];
const employee = [];
const invoices = [];

function product(id, name, price, expiryDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expiryDate = expiryDate;
}

function employee(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
}

function invoice(products, quantity) {
    this.products = products;
    this.quantity = quantity;
}

function addProduct() {
    const id = prompt("Nhập id sản phẩm: ");
    const name = prompt("Nhập tên sản phẩm: ");
    const price = prompt("Nhập giá sản phẩm: ");
    const expiryDate = prompt("Nhập hạn sử dụng (dd/mm/yyyy): ");

    const newproduct = new product(id, name, price, expiryDate);
    Product.push(newproduct);
}

function addEmployee() {
    const id = prompt("Nhập id nhân viên: ");
    const name = prompt("Nhập tên nhân viên: ");
    const age = prompt("Nhập tuổi nhân viên: ");

    const newemployee = new employee(id, name, age);
    employee.push(newemployee);
}

function addInvoice() {
    const products = [];
    const quantity = parseInt(prompt("Nhập số lượng sản phẩm trong hóa đơn: "));

    for (let i = 0; i < quantity; i++) {
        const productId = prompt(`Nhập id sản phẩm #${i + 1}: `);
        const product = Product.find(prod => prod.id === productId);
        if (product) {
            products.push(product);
        } else {
            console.log(`Không tìm thấy sản phẩm có id ${productId}`);
        }
    }

    const newinvoice = new invoice(products, quantity);
    invoices.push(newinvoice);
}

function printProduct() {
    console.log("Danh sách hóa đơn: ");
    Product.forEach(product => {
        console.log("id: ",product.id);
        console.log("name: ",product.name);
        console.log("price: ",product.price);
    })
}


function printOverview() {
    console.log("Thông tin tổng quan cửa hàng:");
    console.log(`Số lượng sản phẩm: ${Product.length}`);
    console.log(`Số lượng nhân viên: ${employee.length}`);

    const totalRevenue = invoices.reduce((acc, invoice) => {
        const invoiceTotal = invoice.products.reduce((total, product) => total + parseInt(product.price), 0);
        return acc + invoiceTotal;
    }, 0);
    console.log(`Doanh thu: ${totalRevenue}`);
}

function checkExpiry() {
    const today = new Date();
    console.log("Sản phẩm sắp hết hạn sử dụng:");
    Product.forEach(product => {
        const expiryDate = new Date(product.expiryDate);
        const timeDiff = expiryDate.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (daysDiff <= 7 && daysDiff >= 0) {
            console.log(`${product.name} - Hết hạn sau ${daysDiff} ngày`);
        }
    });
}

let choice;
do {
    choice = prompt(`Chọn một lựa chọn:
    1. Thêm sản phẩm mới
    2. In ra danh sách sản phẩm
    3. Thêm nhân viên mới
    4. In ra danh sách nhân viên
    5. Thêm hóa đơn mới 
    6. In ra thông tin tổng quan cửa hàng
    7. Kiểm tra sản phẩm sắp hết hạn sử dụng`);

    switch(choice) {
        case '1':
            addProduct();
            break;
        case '2':
            printProduct();
            break;
        case '3':
            addEmployee();
            break;
        case '4':
            printEmployee();
            break;
        case '5':
            addInvoice();
            break;
        case '6':
            printOverview();
            break;
        case '7':
            checkExpiry();
            break;
        default:
            break;
    }
} while (choice !== '8');

















