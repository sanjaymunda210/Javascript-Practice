// let score = "Sanjay"

// two types to access typeof method
//console.log(typeof score);
//console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// type conversion take place but output can be different

// "33" => 33
// "Sanjay" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

// let isLoggedIn = "Sanjay"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Sanjay" => true

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/* ----- Operations ------------ */

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " sanjay";

let str3 = str1 + str2; // Concat
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(((3 + 4) * 5) % 3); // why not use brackets and make code easy to understand and executable

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;

// num1 = num2 = num3 = 2 + 2;
// not a good way to assign

// prefix & postfix

let gameCounter = 100;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
