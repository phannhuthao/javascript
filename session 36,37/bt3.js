// Cách 1:
document.getElementById("btn1").addEventListener("click", function(){
    var InputText = document.getElementById("t1").value;
    document.getElementById("noidung1").innerText = InputText;
});

// Cách 2: 
document.getElementById("t2").addEventListener("input", function() {
    var InputText = document.getElementById("t2").value;
    document.getElementById("noidung2").innerText = InputText;
});

