var chuoi = prompt("Nhập một chuỗi kí tự bất kì: ");
var ketQua = timTuDaiNhat(chuoi);

function timTuDaiNhat(chuoi) {
    var tu = chuoi.split(" ");
    var tuDaiNhat = "";
    var doDaiTuDaiNhat = 0;

    for (var i = 0; i < tu.length; i++) {
        if (tu[i].length > doDaiTuDaiNhat) {
            tuDaiNhat = tu[i];
            doDaiTuDaiNhat = tu[i].length;
        }
    }
    return [tuDaiNhat, doDaiTuDaiNhat];
}

console.log("Từ dài nhất: " + ketQua[0]);
console.log("Độ dài của từ dài nhất: " + ketQua[1]);
