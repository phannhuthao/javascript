var chuoikitu = prompt("Nhập chuỗi kí tự bạn muốn nhập vào: ");
var kitunhap = demSoKyTuKhongKhoangTrang(chuoikitu);

function demSoKyTuKhongKhoangTrang(chuoikitu) {
    let soKyTu = 0;
    for (let i = 0; i < chuoikitu.length; i++) {
        if (chuoikitu[i] !== ' ') {
            soKyTu++;
        }
    }
    return soKyTu;
}


console.log("Số ký tự trong chuỗi (không tính khoảng trắng) là: ", kitunhap);
  