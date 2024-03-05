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


const lop = {};
const thanhvien = "Dat";
const thanhvien2 = "An";

Object.assign(lop, thanhvien, thanhvien2);
console.log(lop);

const person =  {
    firstName: "Duc", 
    lastName: "Duy",
    set fullname(name) {
        const part = name.split(" ");
        this.firstName = part[0];
        this.lastName = part[1];
    } 
};
person.fullname = "Duc Duy";
console.log(person.fullname);
















