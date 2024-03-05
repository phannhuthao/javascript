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




