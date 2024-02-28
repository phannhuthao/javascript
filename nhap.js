var Name = ["H", "K", "T", "N", "O"];

console.log("Phần tử trong mảng name: ", Name);

Name[4] = "M";

let a = 100;
a = 20;
// console.log("Sô a có giá trị là: ", a);

// let n = Number(prompt("Nhập một nguyên dương: "));
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     if ( n > 0 ) {
//         n = n + 1;
//     }
//     console.log(n);
// }


const phone = [1, 2, 3, 4, 5];
phone.push(6);
phone.splice(2,0, '9');
console.log("Phần tử của ", phone, "là:");