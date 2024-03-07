const danhSachHoaDon = [];

function hoadon(sohoadon, tenhoadon, ngaytao, tonggiatri) {
    this.sohoadon = sohoadon;
    this.tenhoadon = tenhoadon;
    this.ngaytao = ngaytao;
    this.tonggiatri = tonggiatri;
}

function themhoadon() {
    let sohoadon = prompt("Nhập số hóa đơn: ");
    var tenhoadon = prompt("Nhập tên hóa đơn: ");
    let ngaytao = prompt("Nhập ngày tạo hóa đơn: ");
    let tonggiatri = prompt("Nhập tổng giá trị hóa đơn: ");

    const newhoadon = new hoadon(sohoadon, tenhoadon, ngaytao, tonggiatri);
    danhSachHoaDon.push(newhoadon);
}

function hienThiHoaDon() {
    console.log("Danh sách hóa đơn: ");
    danhSachHoaDon.forEach(hoadon => {
        console.log("Số hóa đơn:", hoadon.sohoadon);
        console.log("Tên hóa đơn: ", hoadon.tenhoadon);
        console.log("Ngày:", hoadon.ngaytao);
        console.log("Tổng:", hoadon.tonggiatri);
    });
}

function tinhTongGiaTri() {
    let tong = 0;
    danhSachHoaDon.forEach(hoadon => {
        tong += parseFloat(hoadon.tonggiatri);
    });
    return tong;
}

function main() {
    let choice;
    do {
        choice = prompt(`Chọn một lựa chọn:
                1. Thêm hóa đơn mới
                2. In ra danh sách hóa đơn
                3. Tính tổng giá trị hóa đơn
                4. Thoát`);
        switch (choice) {
            case '1':
                themhoadon();
                break;
            case '2':
                hienThiHoaDon();
                break;
            case '3':
                console.log("Tổng giá trị của tất cả hóa đơn là:", tinhTongGiaTri());
                break;
            case '4':
                console.log("Kết thúc chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== '4');
}

// main();
