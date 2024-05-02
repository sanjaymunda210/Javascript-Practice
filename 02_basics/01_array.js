// array
// zero base indexing, not fixed size in js, can use any type of data.

const myArr = [0, 1, 2, 3, 4, 5, true, "Sanjay"];
// console.log(myArr);
// console.log(myArr[6]);
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// Array Methods

myArr.push(6);
myArr.pop();
// console.log(myArr);

myArr.unshift(9);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

const newArr = myArr.join(); // add string in string format
// console.log(myArr);
// console.log(newArr);

// Slice
console.log("A ", myArr);
console.log(myArr.slice(1, 3));
console.log("B ", myArr);
// Splice - its manipulates the original Array
console.log(myArr.splice(1, 3));
console.log("C ", myArr);

const months = ["Jan", "March", "April", "June"];
console.log(months);
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
