let n = Number(prompt("Nhập số lượng sinh viên muốn cập nhật: "));
const sinhVien = {};

for (let i = 0; i < n; i++) {
    let maso = prompt("Nhập id của sinh viên thứ " + (i + 1) + ": ");
    let ten = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ": ");
    sinhVien["id" + (i + 1)] = maso;
    sinhVien["name" + (i + 1)] = ten;
}

console.log("Danh sách sinh viên sau khi cập nhật số lượng và thông tin: ");
for (let i = 1; i <= n; i++) {
    console.log("Sinh viên " + i + ":");
    console.log("ID: " + sinhVien["id" + i]);
    console.log("Name: " + sinhVien["name" + i]);
}

