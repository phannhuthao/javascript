function kiemTraChuoi(str, target) {
    // Lấy độ dài của chuỗi con
    var targetLength = target.length;
    // So sánh phần cuối của chuỗi gốc với chuỗi con
    return str.slice(-targetLength) === target;
}
console.log(kiemTraChuoi("Hello world", "world"));   
console.log(kiemTraChuoi("Hello world", "orld"));    
console.log(kiemTraChuoi("Hello world", "world2"));  
