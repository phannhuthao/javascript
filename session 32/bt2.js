const information = {
    id: 1,
    name: "Hào",
    phone: "09109890814",
    address: "65 Trần Tuấn Khải",
};

let email = prompt("Thay địa chỉ thành email: ");
information.email = email;

delete information.address;

for (let key in information) {
    console.log(key + ": " + information[key]);
}
