const human = {
    name: "Hạ",
    age: 18,
    address: "Long Khánh",
}
console.log("Thông tin ban đầu: ");
console.log("Name: ", human.name);
console.log("Age: ", human.age);
console.log("address: ", human.address);

let birthday = prompt("Nhập ngày sinh: ");
human.birthday = birthday;

delete human.age;

console.log("Thông tin sau khi cập nhật: ");
for (let key in human) {
    console.log(key + ": " + human[key]);
}
