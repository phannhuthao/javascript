const books = [
    { author: 'Auth', name: 'Tìm Lại Cuộc Đời' },
    { author: 'Ohayo', name: 'Khoi Nguyen'}, 
    
];

var searchAuthor = prompt("Nhập tên tác giả cần tìm: ");
var foundBook = false;

for (var i = 0; i < books.length; i++) {
    if (books[i].author === searchAuthor) {
        console.log("Tên cuốn sách của tác giả", searchAuthor, "là:", books[i].name);
        foundBook = true;
        break;
    }
}
if (!foundBook) {
    console.log("Không tìm thấy sách của tác giả", searchAuthor);
}



