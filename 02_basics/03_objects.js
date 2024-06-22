// Objects can be declared as
// 1. literals
// 2. constructor

// Note- when we make objects through constructor, singleton object is made, singleton is not made made with literals method

// *** OBJECT LITERALS ***

const mySym = Symbol("key1");

const jsUser = {
  name: "Sanjay",
  "full name": "Sanjay Munda",
  [mySym]: "myKey1", // right method to define or use symbol in objects
  age: 18,
  location: "Jamshedpur",
  email: "sanjaymunda0123@gmail.com",
  isLogged: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser.email); // not prefered method
console.log(jsUser["email"]); // prefered method
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// jsUser.email = "sanjaymunda@chatgpt.com";
// Object.freeze(jsUser); // stop changes to object
// jsUser.email = "sanjaymunda@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log(`Hello Js User ${this["full name"]}`);
  console.log(`Hello Js User ${this.name}`);
};

jsUser.greeting();
