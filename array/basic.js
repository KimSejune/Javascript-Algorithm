let arr1 = [];
console.log(arr1);
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
let arr3 = Array(10).fill(0);
console.log(arr3);
let arr4 = Array.from({ length: 100 }, (_, i) => i);
console.log(arr4);

const arr = [1, 2, 3];
arr.push(4);
arr.pop();

// splice는 선형시간을 가진다.
arr.splice(1, 0, 5);
console.log(arr);
