const inputId = document.getElementById('InputId');
const inputName = document.getElementById('InputName');
const inputNumber = document.getElementById('InputNumber');
const inputPhone = document.getElementById('InputPhone');
const inputEmail = document.getElementById('InputEmail');
const createButton = document.getElementById('btn');

createButton.addEventListener('click', () => {
    // kiểm tra Student ID
    const studentId = inputId.value;
    if (studentId.length < 6) {
        alert("Mã học sinh phải có 6 kí tự hoặc trở lên 6 ki tự");
        return;
    }

    //  kiểm tra Student Name
    const studentName = inputName.value;
    if (studentName.trim() === '') {
        alert("Tên học sinh không được để trống");
        return;
    }

    //  kiểm tra Age
    const age = parseInt(inputNumber.value);
    if (isNaN(age) || age < 18) {
        alert("Tuổi phải lớn hơn hoặc bằng 18");
        return;
    }

    // kiểm tra Phone 
    const phoneRegex = /^(0\d{9})$/;
    const phone = inputPhone.value;
    if (!phoneRegex.test(phone)) { // kiểm tra chuỗi có hợp lệ
        alert("Số điện thoại phải có định dạng là số điện thoại ở VN");
        return;
    }

    // kiểm tra Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email = inputEmail.value;
    if (!emailRegex.test(email)) {
        alert("Email phải có dấu @");
        return;
    }

    const studentInfo = "Student ID: ${studentId}\nStudent Name: ${studentName}\nAge: ${age}\nPhone: ${phone}\nEmail: ${email}";
    alert(studentInfo);
});
