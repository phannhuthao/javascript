class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    introduce() {
        console.log(`Tiêu đề: ${this.title}`);
        console.log(`Tác giả: ${this.author}`);
        console.log(`Năm xuất bản: ${this.publishedYear}`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
    displayBooks() {
        console.log("Sách mới được cập nhật trong thư viện:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Sách ${i + 1}:`);
            this.books[i].introduce();
        }
    }
}

const library = new Library();


var tieude = prompt("Nhập tiêu đề sách mới: ");
var ten = prompt("Nhập tên tác giả: ");
var nam = prompt("Ngày, tháng, năm xuất bản: ");

const book1 = new Book("Chú thuật hồi chiến", "Gege", "19/2/2014");
book1.introduce();

const newBook = new Book(tieude, ten, nam);
library.addBook(newBook);
library.displayBooks();

