let a = Number(prompt("Nhập số nguyên a: "));
let b = Number(prompt("Nhập số nguyên b: "));

let arr = [];

let min = Math.min(a, b);
let max = Math.max(a, b);

for (let i = min; i <= max; i++) {
    arr.push(i);
}
console.log("Mảng chứa các số trong khoảng từ", a, "đến", b, "là:", arr);


