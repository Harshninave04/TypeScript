"use strict";
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr[0]);
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    if (i === 5) {
        arr.push(7);
    }
    console.log(arr[i]);
}
arr.push(8); // push adds number in the end
console.log(arr);
arr.pop(); // pop removes number from the end
console.log(arr);
arr.unshift(0); // Add numbers in the first place
console.log(arr);
arr.shift(); // Remove number from the first place
console.log(arr);
