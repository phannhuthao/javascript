var listItems = ['List item number 1', 'List item number 2', 'List item number 3'];

// Hàm để thêm mục vào danh sách
function addListItem(item) {
  var ul = document.getElementById('myList');
  var li = document.createElement('li'); // tạo thêm một thẻ mới
  li.appendChild(document.createTextNode(item)); // thêm phần tử mới vào danh sách
  ul.appendChild(li);
}

// Thêm mỗi mục trong mảng vào danh sách UL
listItems.forEach(addListItem);




