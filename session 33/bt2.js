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
    contatc3: {
        name: "Nguyễn Hoàng Ân",
        phone: "78012454468",
        email: "anche123@gmail.com",
    },
    contatc4: {
        name: "Nguyễn Tấn Duy",
        phone: "09543749887",
        email: "duytan@gmail.com"
    },
}

for (let key in bookphone) {
    console.log(key + ": ");
    console.log("Name: " + bookphone[key].name);
    console.log("Phone: " + bookphone[key].phone);
    console.log("Email: " + bookphone[key].email);
    
}