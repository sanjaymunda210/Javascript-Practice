//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++

// two types of memory - stack & heap

// all primitive data type are stored in stack
// all non-primitive data types are stored in heap

// in stack we get a copy and in heap we get a reference

//example of stack
let nameOne = "Sanjay";
let nameTwo = nameOne;
nameTwo = "Munda";
console.log(nameOne);
console.log(nameTwo);

//example of heap
let userOne = {
  name: "Sanjay",
  email: "sanjaymunda0123@gmail.com",
};
let userTwo = userOne;
userTwo.email = "sanjay@google.com";
console.log(userOne.email);
console.log(userTwo.email);
