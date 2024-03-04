let arr = [6, 7, 8, 9, 10];
console.log("Mảng ban đầu: ", arr);

function hinhTamGiac(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] > arr[k] && arr[j] + arr[k] > arr[i] && arr[i] + arr[k] > arr[j]) {
                    count++;
                }
            }
        }
    }
    return count;
}

function inratamgiac(arr) {
    let tamgiac = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] > arr[k] && arr[j] + arr[k] > arr[i] && arr[i] + arr[k] > arr[j]) {
                    tamgiac.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return tamgiac;
}

let result = hinhTamGiac(arr);
console.log("Số lượng hình tam giác có thể tạo ra từ các phần tử trong mảng là: ", result);

let triangles = inratamgiac(arr);
console.log("Các tam giác trong mảng là: ", inratamgiac(arr));





