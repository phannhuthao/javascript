document.getElementById("btn").addEventListener("click", function() {
    var noidung = document.getElementById("outInput");
    if (noidung.lenght > 10) {
        alert("Không được nhập hơn 10 kí")
    } else {
        alert("Nhập hợp lệ")
    }
})