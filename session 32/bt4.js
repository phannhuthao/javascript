let maso = Number(prompt("Nhập id: "));
var ten = prompt("Nhập tên: ");
let gia = Number(prompt("Nhập giá tiền: "));
let soluong = Number(prompt("Nhập số lượng: "));

const product = {
    id: maso,
    name: ten,
    price: gia,
    quality: soluong,
}

console.log("Id: ", product.id);
console.log("Name: ", product.name);
console.log("Price: ", product.price);
console.log("Quality: ", product.quality);