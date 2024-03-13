var arr = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

function addArr(item) {
   var ul = document.getElementById('myList');
   var p = document.createElement('li');
   p.appendChild(document.createTextNode(item));
   ul.appendChild(p);
}
arr.forEach(addArr);
