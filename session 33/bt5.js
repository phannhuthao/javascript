const library = {
    books: [],
    addBook: function(book) {
        this.books.push(book);
    },
    isBookAvailable: function(bookTitle) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === bookTitle && this.books[i].isAvailable === "Hoàn thành") {
                return true;
            }
        }
        return false;
    }
};

const book1 = {
    title: "Tìm Lại Cuộc Đời",
    author: "Ohayo",
    publishedYear: "1/1/1999",
    isAvailable: "Hoàn thành",
    borrow: function() {
        if (this.isAvailable === "Hoàn thành") {
            this.isAvailable = "Đã mượn";
            console.log("Sách '" + this.title + "' đã được mượn.");
        } else {
            console.log("Sách '" + this.title + "' không khả dụng để mượn.");
        }
    },
    returnBook: function() {
        if (this.isAvailable === "Đã mượn") {
            this.isAvailable = "Hoàn thành";
            console.log("Sách '" + this.title + "' đã được trả.");
        } else {
            console.log("Sách '" + this.title + "' đã có sẵn.");
        }
    }
};

const book2 = {
    title: "Chú mèo thần tài của tôi",
    author: "Hạ",
    publishedYear: "20/4/1999",
    isAvailable: "Đang viết tiếp",
    borrow: function() {
        if (this.isAvailable === "Hoàn thành") {
            this.isAvailable = "Đã mượn";
            console.log("Sách '" + this.title + "' đã được mượn.");
        } else {
            console.log("Sách '" + this.title + "' không khả dụng để mượn.");
        }
    },
    returnBook: function() {
        if (this.isAvailable === "Đã mượn") {
            this.isAvailable = "Hoàn thành";
            console.log("Sách '" + this.title + "' đã được trả.");
        } else {
            console.log("Sách '" + this.title + "' đã có sẵn.");
        }
    }
};
library.addBook(book1);
library.addBook(book2);

console.log("Sách 'Tìm Lại Cuộc Đời' có sẵn để mượn: " + library.isBookAvailable("Tìm Lại Cuộc Đời"));
book1.borrow();
book1.returnBook();



