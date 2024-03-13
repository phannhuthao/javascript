var btn = document.getElementById("btn");
var nd = document.getElementById("t1");
var originalContent = nd.innerHTML;

btn.addEventListener("click", function() {
    if (nd.innerHTML === originalContent) {
        nd.innerHTML = "Hào";
    } else {
        nd.innerHTML = originalContent;
    }
});
