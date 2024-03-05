const product = [
    {id: 1, name: 'Iphone12', price: 2000},
    {id: 2, name: 'Iphone11', price: 1000},
    {id: 3, name: 'Samsung J6', price: 5000},
    {id: 4, name: 'Samgsung A54', price: 1500},
];

function sapXepGiaTienTangDan(products) {
    return products.sort((a, b) => a.price - b.price);
    //  products.sort((a, b)) 
    //  return (a.price - b.price);
}
const giatien = sapXepGiaTienTangDan(product);
console.log("Mảng product sau khi sắp xếp giá tiền tăng dần: ",giatien)



