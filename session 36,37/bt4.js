document.getElementById("btn1").addEventListener("click", function() {
        var so1 = parseFloat(document.getElementById("so1").value); //parseFloat chuyển đổi chuỗi về số thực
        var so2 = parseFloat(document.getElementById("so2").value);
        var tong1 = so1 + so2;
        document.getElementById("tong1").value = tong1;
    })
  
document.getElementById("btn2").addEventListener("click", function () {
    var so3 = parseFloat(document.getElementById("so3").value);
    var so4 = parseFloat(document.getElementById("so4").value);
    var tong2 = so3 + so4;
    document.getElementById("tong2").value = tong2;
});
