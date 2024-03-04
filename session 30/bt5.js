var chuoi = prompt("Nhập một chuỗi kí tự bạn muốn nhập vào: ");
console.log("Chuỗi khi mới được nhập vào: ", chuoi);

function vietHoaChuCaiCuoi(chuoi) {
    var words = chuoi.split(' ');
    // Duyệt qua từng từ trong mảng và viết hoa ký tự cuối cùng của từ đó
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // Nếu từ đó chỉ có một ký tự, viết hoa nó
        if (word.length === 1) {
            words[i] = word.toUpperCase();
        } else {
            // Ngược lại, viết hoa ký tự cuối cùng của từ
            words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase();
        }
    }
    return words.join(' ');
}
console.log("Chuỗi sau khi được nhập và in ra màn hình với chữ cái cuối viết hoa: ",vietHoaChuCaiCuoi(chuoi));
