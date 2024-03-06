var bookphone = {
    contact1: {
        name: "Phan Nhựt Hào",
        phone: "0862536828",
        email: "ohayo123@gmail.com",
    },
    contact2: {
        name: "Ninh Thành Đạt",
        phone: "0972345923",
        email: "datgk123@gmail.com",
    },
    contact3: {
        name: "Nguyễn Hoàng Ân",
        phone: "78012454468",
        email: "anche123@gmail.com",
    },
    contact4: {
        name: "Nguyễn Tấn Duy",
        phone: "09543749887",
        email: "duytan@gmail.com"
    },
    displayFullInfo: function() {
        for (let key in this) {
            if (typeof this[key] === 'object' && key.startsWith('contact')) {   
                console.log("Name: " + this[key].name);
                console.log("Phone: " + this[key].phone);
                console.log("Email: " + this[key].email);
                console.log("-----------------------");
            }
        }
    }
};
bookphone.displayFullInfo();
