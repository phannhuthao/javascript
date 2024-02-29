let arr = [1, 2, 4, 5, 1, 2, 6, 7, 8, 6, 5, 7, 8];
console.log("Mảng ban đầu: ", arr);

let chan = [];
let le = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        chan.push(arr[i]);
    } else {
        le.push(arr[i]);
    }
}
console.log("Mảng chẵn: ", chan);
console.log("Mảng lẻ: ", le);
