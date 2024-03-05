let maso = Number(prompt("Nhập id: "));
let ten = prompt("Nhập tên: ");
let sdt = prompt("Nhập số điện thoại: ");
let diachi = prompt("Nhập địa chỉ ở: ");

const information = {
    id: maso,
    name: ten,
    phone: sdt,
    address: diachi,
};

console.log("ID: ", information.id);
console.log("Name: ",information.name);
console.log("Phone: ",information.phone);
console.log("Address: ",information.address);

