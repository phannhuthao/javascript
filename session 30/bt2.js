// let n = Number(prompt("Nhập một số nguyên dương N bất kì: "));

// function inRaSoNguyenDuongLe(n) {
//     let sum = 0;
//     let number = [];
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//         number.push(i);
//         if (sum % 2 === 0) {
//             console.log("Tổng các số được in ra là: ", sum)
//         }
//   }
// }
// console.log("Tổng là: ", sum);

let n = Number(prompt("Nhập một số nguyên dương N bất kì: "));

function inRaSoNguyenDuongLe(n) {
    let sum = 0;
    let number = [];
    for (let i = 1; i <= n; i += 2) { 
        sum += i;
        number.push(i);
        if (sum % 2 !== 0) {
            console.log("Tổng các số được in ra là: ", sum);
        }
    }
    console.log("Số nguyên dương lẻ từ 0 đến", n, "và có tổng là một số lẻ là:", number);
}

inRaSoNguyenDuongLe(n);
