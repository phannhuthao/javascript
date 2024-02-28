// Khai báo mảng đầu vào
let arr1 = [1, 2, 5, 7];
let arr2 = [10, 5, 7];


arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let smallestMissing1 = 1;
let smallestMissing2 = 1;


for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= smallestMissing1) {
        smallestMissing1++;
    }
}

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] >= smallestMissing2) {
        smallestMissing2++;
    }
}

console.log(smallestMissing1);
console.log(smallestMissing2); 
