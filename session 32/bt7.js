// const users = [];

var users = [];

function createUser() {
    var id = prompt("Nhập ID:");
    var user_name = prompt("Nhập tên (tên lớn hơn 2 kí tự):");
    var email = prompt("Nhập email:");
    var password = prompt("Nhập mật khẩu (tối đa 8 kí tự): ");

    if (!user_name  && email  &&password) {
        alert("Tên, email và mật khẩu không được để trống!");
        return;
    }

    if (user_name.length < 2) {
        alert("Tên không được ngắn hơn 2 ký tự!");
        return;
    }

    let emailRegex = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng!");
        return;
    }

    if (password.length < 8) {
        alert("Mật khẩu tối thiểu 8 ký tự!");
        return;
    }

    users.push({id, user_name, email, password});
}

createUser();

console.log(users);