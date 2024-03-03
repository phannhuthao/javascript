var chuoi = prompt("Nhập một chuỗi kí tự bất kì: ");

function vietHoaChuCaiDau(chuoi) {
    var arrChuoi = chuoi.split(" ");
    for (var i = 0; i < arrChuoi.length; i++) {
        arrChuoi[i] = arrChuoi[i].charAt(0).toUpperCase() + arrChuoi[i].slice(1).toLowerCase();
    }
    return arrChuoi.join(" ");
}
console.log(vietHoaChuCaiDau(chuoi));
