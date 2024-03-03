var chuoi = prompt("Nhập một chuỗi bất kì: ");
var mang = ["123", "abc", "12a3"];

function hamTimKiem(chuoi, mang) {
    var ketQua = [];
    for (var i = 0; i < mang.length; i++) {
        // Kiểm tra xem chuỗi nhập vào có tồn tại trong phần tử của mảng hay không
        if (mang[i].indexOf(chuoi) !== -1) {
            // Nếu có, thêm phần tử đó vào mảng kết quả
            ketQua.push(mang[i]);
        }
    }
    return ketQua;
}
console.log("Các phần tử trong mảng có chứa chuỗi là: " + hamTimKiem(chuoi, mang));
