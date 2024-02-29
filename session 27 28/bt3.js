var arr=[1,2,4,3,7,10,6,11,23,15,17];
console.log('Mảng ban đầu:',arr);

let mangLe=[];

for(let i=0;i<arr.length;i++){
    
    if (arr[i]%2!==0){
        mangLe.push(arr[i]);
        arr.splice(i,1);
        i--;
    }
}
console.log('Mảng sau khi được xoá phần tử lẻ:',arr);
console.log('Các phần tử lẻ đã được xoá:', mangLe);