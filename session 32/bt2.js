const information = {
    id: 1,
    name: "Hào",
    phone: "09109890814",
    address: "65 Trần Tuấn Khải",
};
console.log("Thông tin ban đầu: ");
console.log("id: ",information.id);
console.log("Name: ", information.name);
console.log("Phone:", information.phone);
console.log("Address: ", information.address);

let email = prompt("Thay đổi địa chỉ thành email: ");
information.email = email;

delete information.address;

for (let key in information) {
    console.log("Thông tin sau khi cập nhật lại: ");
    console.log(key + ": " + information[key]);
}
