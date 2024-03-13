function changeBackground() {
    var input = document.getElementById("myInput");
    if (input.value) {
      input.style.backgroundColor = "white";
    } else {
      input.style.backgroundColor = "yellow";
    }
  }
  
  function addItem() {
    var input = document.getElementById("myInput");
    var item = document.createElement("li");
    item.innerText = input.value;
    document.getElementById("myList").appendChild(item);
    input.value = "";
    changeBackground();
  }