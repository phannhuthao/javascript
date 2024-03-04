let mang = [1, 2, 3.2, 5, 7.8, 9, 0, 10, 10.5, 11, 12, 13, 6];
console.log("Mảng ban đầu: ", mang);

function laSoNguyenTo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function inSoNguyenToTrongMang(mang) {
    console.log("Các số nguyên tố trong mảng là:");
    mang.forEach(number => {
        if (Number.isInteger(number) && laSoNguyenTo(number)) {
            console.log(number);
        }
    });
}
inSoNguyenToTrongMang(mang);
