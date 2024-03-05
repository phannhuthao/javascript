let mang1 = [-1, 3, -9];
let mang2 = [10, 8, 6];
let mang3 = [17, 20, 46];
console.log("Mảng ban đầu: ", mang1,mang2,mang3);

function hamLonNhat(...arrays) {
    let maxNumbers = arrays.map(array => Math.max(...array));
    return maxNumbers;
}

let ketQua = hamLonNhat([-1, 3, -9], [10, 8, 6], [17, 20, 46]);
console.log("Số lớn nhất trong các mảng là: ",ketQua);  


