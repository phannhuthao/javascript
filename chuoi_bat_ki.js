let nhapchuoi = prompt("Nhập vào một chuỗi bất kì: ");
let mangchuoi = [];

for (let i = 0; i < nhapchuoi.length; i++) {
    let subStr = '';
    for (let j = i; j < nhapchuoi.length; j++) {
        subStr += nhapchuoi[j];
        mangchuoi.push(subStr);
    }
}
console.log("Chuỗi bạn vừa nhập có chuỗi kí tự như sau: ",mangchuoi);
