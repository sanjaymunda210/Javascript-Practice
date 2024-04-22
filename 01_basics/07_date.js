// Dates

let myDate = new Date();
// console.log(myDate.toString()); // Mon Apr 22 2024 10:42:42 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Mon Apr 22 2024
// console.log(myDate.toLocaleString()); // 4/22/2024, 10:53:39 AM
// console.log(myDate.toLocaleString("en-IN")); // 22/4/2024, 10:53:39 am
// console.log(typeof myDate); // object
// console.log(myDate.toJSON()); // 2024-04-22T05:26:06.127Z
// console.log(myDate.toUTCString()); // Mon, 22 Apr 2024 05:28:33 GMT
// console.log(myDate.toLocaleDateString()); // 4/22/2024
// console.log(myDate.toLocaleTimeString()); // 11:00:37 AM
// console.log(myDate); // 2024-04-22T05:38:17.992Z

// let myCreateDate = new Date(2023, 0, 23); // toDateString Mon Jan 23 2023, month start with zero in array format
// let myCreateDate = new Date(2023, 0, 23, 5, 3); // toLocaleString 1/23/2023, 5:03:00 AM
// let myCreateDate = new Date("2023-01-14"); // 1/14/2023, 5:30:00 AM, month start with 01 in date format yyyy-mm-dd
let myCreateDate = new Date("01-14-2023"); // 1/14/2023, 12:00:00 AM, another format also accepted mm-dd-yyyy
// console.log(myCreateDate.toLocaleString());

// timestamp are used in quizes,poll to get fastest time and perform comparison
let myTimeStamp = Date.now();

// console.log(myTimeStamp); // 1713765274438, milisecond value since the midnight at the beginning of January 1, 1970, UTC
// console.log(myCreateDate.getTime()); // to get milisecond value of created date and perform comparison
// console.log(Math.floor(Date.now() / 1000)); // to get value in seconds

console.log(myDate.getMonth() + 1); // month start with zero
console.log(myDate.getDay()); // monday is 1

// `${newDate.getDay()} and the time ` //way to write by using string interpolation

// Customization
// myDate.toLocaleString('default', {
//     weekday: "long",

// })
