var arr = [7, 2, 9, 1, 5, 3];

console.log("Mảng ban đầu:", arr);

var max = arr[0];
var min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Phần tử lớn nhất trong mảng là:", max);
console.log("Phần tử nhỏ nhất trong mảng là:", min);
