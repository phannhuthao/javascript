// var chuoi = prompt("Nhập một chuỗi bất kì vào: ");
// var mangchuoi = [];

// function inrakitu(chuoi, mangchuoi) {
//     var kiTuDau = '';
//     var so = '';
//     var kitudacbiet = '';

//     for (var i = 0; i < chuoi.lenght; i++) {
//         var char = chuoi.lenght.charAt(i);
//         if (/[A-zA-Z]/.test(char)) {
//             kiTuDau += char;
//         } else if (/[0 - 9]/.test(char)) {
//             so += char;
//         } else {
//             kitudacbiet += char;
//         }
//     }

//     mangchuoi.push.apply(mangchuoi, kiTuDau.split(''));
//     mangchuoi.push.apply(mangchuoi, so.split(''));
//     mangchuoi.push.apply(mangchuoi, kitudacbiet.split(''));

//     return mangchuoi;
// }
// console.log("Kết quả trả về chuỗi lần lượt là: ",inrakitu(chuoi,mangchuoi));


var chuoi = prompt("Nhập một chuỗi bất kỳ vào: ");
var mangchuoi = [];

function inrakitu(chuoi, mangchuoi) {
    var chuCai = '';
    var so = '';
    var kyTuDacBiet = '';
    
    for (var i = 0; i < chuoi.length; i++) {
        var char = chuoi.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
            chuCai += char;
        } else if (/[0-9]/.test(char)) {
            so += char;
        } else {
            kyTuDacBiet += char;
        }
    }

    mangchuoi.push.apply(mangchuoi, chuCai.split(''));
    mangchuoi.push.apply(mangchuoi, so.split(''));
    mangchuoi.push.apply(mangchuoi, kyTuDacBiet.split(''));

    return mangchuoi;
}
console.log(inrakitu(chuoi, mangchuoi));




